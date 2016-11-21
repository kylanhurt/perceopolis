import React from 'react';
import ReactDOM from 'react-dom';
import getEntityIndex from '../../utils/helpers'

class HomeWelcomeSubmit extends React.Component {

  render() { 
  	return( 
  		<div className="row">
			<div className="jumbotron col-lg-12" id="home-logged-in-content">
			    <h1>Welcome to dataGo<span>,testusername</span>!</h1>
			    <p>To submit a new entity to our database, please click the button below...</p>
			    <p><a className="btn btn-primary btn-large">Submit New Entity</a></p>
			</div>
 	  	</div>
  	)
  }
}

export default HomeWelcomeSubmit;