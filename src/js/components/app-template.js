import React from 'react';
import Header from './header/app-header';
import Footer from './footer/app-footer';
import Home from './app-home';


export default (props) => {
	return(
		<div >
			<Header></Header>
			{ props.children }
			<Footer></Footer>
		</div>
	)
}