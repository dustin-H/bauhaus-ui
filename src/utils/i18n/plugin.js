import {loadLanguages} from './index.js';

var superagentPlugin = function(request) {
	request.end = function(fn) {
		request.end(function(err, res) {
			if(err == null && res.type === 'application/json' && res.body.i18n) {
				loadLanguages(res.body.i18n, function(){
					fn(err, res);
				});
			} else {
				fn(err, res);
			}
		});
	};
	return request;
};
module.exports = superagentPlugin;
