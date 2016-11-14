import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Template from './app-template';
import Home from './app-home';

export default() => {
	return(
		<Router history={hashHistory}>
			<Route path="/" component={Template}>
				<IndexRoute component={Home} />
			</Route>
		</Router>
	)
}