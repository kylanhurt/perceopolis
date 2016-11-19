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
		.then(data => {
			console.log('inside of home-table init -> then', 'data.data: ', data.data);
			this.setState({entities: data.data});     
			console.log('this is now: ', this);			
		})
	}

  render() { 
  	return( 
  		<div className="row">
		    <table className="table table-striped table-hover home-index-table">
		        <thead>
		            <tr>
		                <th className="home-index-table-head-title">Name</th>
		                <th className="home-index-table-head-website">Website</th>
		                <th className="home-index-table-head-location">Location</th>
		                <th className="home-index-table-head-year">Year Founded</th>
		                <th className="home-index-table-head-created">Submitted</th>
		            </tr>
		        </thead>
		        <tbody>
		            	{this.state.entities.map((entity, index) => (
	            		<tr key={index}>
			                <td className="home-index-table-body-title"><a>{entity.title}</a></td>
			                <td className="home-index-table-body-website"><a href="http://{entity.website}">{entity.website}</a></td>                        
			                <td className="home-index-table-body-location">{entity.location}</td>
			                <td className="home-index-table-body-year">{entity.year_founded}</td>
			                <td className="home-index-table-body-created">{entity.created_at}</td>
		                </tr>
	            		))}
		        </tbody>
		    </table>
		 </div>	
	 )  	
  }
}

export default HomeTable