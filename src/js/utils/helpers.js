import axios from 'axios';

export default function getEntityIndex(criteria = 'created_at', count='10', order='desc', endpointUri = 'http://localhost/api/') {
	let currentIndexes = {};
	return axios.get(`${endpointUri}entity?criteria=${encodeURI(criteria)}&count=${count}&order=${order}`);		
}