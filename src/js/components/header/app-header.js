import React from 'react';

export default () => {
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
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="email" className="form-control" id="login-email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="login-password" />
                            </div>
                            <button type="submit" className="btn btn-success">Login</button>
                        </form>
                    </ul>
                </div>
            </nav>
		</div>
	)
}