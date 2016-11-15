import React from 'react';

export default () => {
	return (
		<div className="row">
			<div className="jumbotron col-lg-12">
				<div className="col-lg-4 col-sm-12" id="home-signup-form">
			        <form>
			            <p>Please fill out the fields below to create an account:</p>
			            <div className="form-group">
			                <label for="login-email">Email:</label>
			                <input type="email" className="form-control" id="login-email" placeholder="user@example.com" />
			                <span className="help-block"></span>                
			            </div>
			            <div className="form-group">
			                <label for="login-password">Password:</label>
			                <input type="password" className="form-control" id="login-password" placeholder="*******" />
			            </div>
			            <button type="submit" className="btn btn-primary">Login</button>
			            <button type="submit" className="btn btn-secondary">Register</button>
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