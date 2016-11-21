import React from 'react';
import HomeJumbotron from './home/home-jumbotron'
import HomeTable from './home/home-table';
import HomeWelcomeSubmit from './home/home-welcome-submit';
import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';
//import StoreWatchMixin from '../../mixins/StoreWatchMixin.js'

const CHANGE_EVENT = 'change';

var _index = [];

export default ({entities}) => {
	return(
		<div className="main-cont-area app-home">
			<HomeJumbotron />
			<HomeWelcomeSubmit />
			<HomeTable entities={entities}/>			
		</div>
	)
};

const AppHome = Object.assign(EventEmitter.prototype, {
	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	getEntities() {

	}
})