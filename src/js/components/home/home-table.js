import React from 'react';
import ReactDOM from 'react-dom';
import getEntityIndex from '../../utils/helpers'

class HomeTable extends React.Component {

	constructor( props ) {
		console.log('inside home-table constructor')
		super(props)
		this.state = { 
			entities: []
		}
	}
	
	componentDidMount(){
		this.init()
	}

	init(){
		console.log('inside beginning of home-table init');
		getEntityIndex('created_at', 10, 'desc')
		.then(function(data){
			console.log('inside of home-table init -> then');
			this.setState({entities: data});     
		})
	}

  render() { 
  	return( 
  		<div className="col-lg-8 col-lg-offset-2">
  		 	<p>Sample content, table pending</p>
		 </div>	
	 )  	
  }
}

export default HomeTable