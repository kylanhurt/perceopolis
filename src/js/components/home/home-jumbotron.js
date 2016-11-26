import React from 'react';
import axios from 'axios';

export default class HomeJumbotron extends React.Component {

	constructor(props){
		super(props);
  	this.loginUser = this.loginUser.bind(this);
  	this.registerUser = this.registerUser.bind(this);		
    this.state = {
    	credentials: {
	      user: '',
	      password: ''
    	}
    };
  }


  loginUser(e) {
  	console.log('this:' , this, 'e is:', e, 'this.state', this.state);
		e.preventDefault();

  }

  registerUser(e) {
  	console.log('this:' , this, 'e is:', e, 'this.state', this.state);
  	e.preventDefault();
  	let data = {
			email: this.state.credentials.email.value,
			password: this.state.credentials.password.value
  	};
  	var self = this;
  	axios({
  		method: 'POST',
  		url: 'http://localhost/api/user/register',
  		headers: {
		    'Content-Type': 'application/json'
  		},
  		data: data
  	}).then(function(response) {
  		console.log('response is: ', response);
  		if(response.data.code === 1){
  			console.log('response code is: ', response.data.code);
  			console.log('data is: ', data);
  			self.setState({userName : data.email});
	  		axios({
	  			method: 'POST',
	  			url: 'http://localhost/api/authenticate',
	  			params: data
	  		}).then(function(response2) {
		  		console.log('response2 is: ' , response2);
		  		if(response2.data.token) {
		  			self.setState({token: response2.data.token });
		  		} else {
		  			console.log('invalid or no token received from server');
		  		}
		  	})  			
  		} else {
  			console.log('register response code is: ', response.data.code);
  		}

  	})
  	//axios.post('http://localhost/api/user/register', {email: this.state.credentials.loginEmail,password: this.state.credentials.loginPassword})
  }

	render() {
		return (
			<div className="row">
				<div className="jumbotron col-lg-12">
					<div className="col-lg-4 col-sm-12" id="home-signup-form">
				        <form>
				            <p>Please fill out the fields below to create an account:</p>
				            <div className="form-group">
				                <label for="login-email">Email:</label>
				                <input ref={(input) => this.state.credentials.email = input} type="email" className="form-control" id="login-email" placeholder="user@example.com" />
				                <span className="help-block"></span>                
				            </div>
				            <div className="form-group">
				                <label for="login-password">Password:</label>
				                <input ref={(input) => this.state.credentials.password = input} type="password" className="form-control" id="login-password" placeholder="*******" />
				            </div>
				            <button type="submit" className="btn btn-primary" onClick={this.loginUser}>Login</button>
				            <button type="submit" className="btn btn-secondary" onClick={this.registerUser}>Register</button>
				            <input type="hidden" name="_token" value="_token" />
				        </form>
				    </div>
				    <div className="col-lg-6 col-lg-offset-2">
				        <p>Become a dataGo member and you will be given access to the following features:</p>
			            <ul>
			                <li>Submit new entities for consideration and review by other users.</li>
			                <li>Rate and review entities submitted by other users.</li>
			                <li>Participate in discussions regarding organizations and current events.</li>
			                <li>Begin accruing credibility as a user, giving your account more influence.</li>
			            </ul>
				    </div>   				
				</div>
			</div>
		)
	}
}