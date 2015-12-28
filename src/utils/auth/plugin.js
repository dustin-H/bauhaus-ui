import store from '../../store/store.js';
import states from '../../constants/loadStates.js';
import {
	logout
}
from '../../actions/auth.js';
var superagentPlugin = function(request) {
	var state = store.getState();
	if(state.auth.state === states.READY) {
		request.set(state.auth.data.header, state.auth.data.token);
	}
	request.end = function(fn) {
		request.end(function(err, res) {
			if(err && res.unauthorized) {
				store.dispatch(logout());
			} else {
				fn(err, res);
			}
		});
	};
	return request;
};
module.exports = superagentPlugin;
