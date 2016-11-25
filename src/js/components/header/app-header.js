import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor() {
      super();
    }

    init(navLogin) {
      if(!state.user) {
          navLogin = (        
                      <form className="navbar-form navbar-right">     
                          <div className="form-group">
                              <input type="email" className="form-control" id="login-email" />
                          </div>
                          <div className="form-group">
                              <input type="password" className="form-control" id="login-password" />
                          </div>
                          <button type="submit" className="btn btn-success">Login</button>
                      </form>
                  )
      } else {
          navLogin = (<li ng-if="authenticated"><a href="#" ng-click="logout()" style="color:white;">Logout</a></li>)
      }
    }

    render(navLogin) {
      console.log('navLogin is: ', navLogin, 'this is: ', this)
    	return(
    		<div className="row" style={{clear: "both"}}>
                <nav className="navbar navbar-inverse navbar-fixed-top" >
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                            <a className="navbar-brand" href="#">Percepol.is</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">                 
                            <navLogin />
                        </ul>
                    </div>
                </nav>
    		</div>
	   )
    }
}

export default Header;