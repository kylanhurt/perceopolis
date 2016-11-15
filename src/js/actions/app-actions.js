import AppConstants from '../constants/app-constants'
import {dispatch, register} from '../dispatchers/app-dispatcher';

export default {
	getEntity( entityId ) {
		dispatch({
			actionType: AppConstants.GET_ENTITY, entityId
		})
	}
}