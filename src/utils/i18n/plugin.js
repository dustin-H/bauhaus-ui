/*import {
	loadLanguages
}
from './index.js';

function callbackExecutor(cb, err, response, key) {
	if(cb.length === 1) {
		cb(response);
	} else if(cb.length > 1) {
		cb(err, response, key);
	} else {
		throw new Error('UnsupportedCallbackException: Your .end() callback must pass at least one argument.');
	}
}

var superagentPlugin = function(config = {}) {
	return function(request) {
		request._end = request.end;
		request.end = function(fn) {
         if(config.auth === true){
            request = request.set('adfdsg', 'Sdafsdfasdf');
         }
			request._end(function(err, res) {
				if(err == null && res.type === 'application/json' && res.body.i18n) {
               console.log('dsfsd');
					loadLanguages(res.body.i18n, function() {
						fn(err, res);
					});
				} else {
               console.log('LLL');
					fn(err, res);
				}
			})
		}
		return request;
	}
};*/

//export default superagentPlugin;
