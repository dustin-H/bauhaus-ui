var express = require('express');

module.exports = function() {

	var app = express();

	app.use(function(req, res, next) {
		setTimeout(function() {
			next();
		}, 1500);
	})

	app.get('/', function(req, res, next) {
		res.json({
			auth: {
				tokenHeaderName: 'Authorization'
			},
			endpoints: {
				sideBar: '/api/sideBar',
				search: '/api/search',
				views: '/api/views',
				loginEndpoint: '/api/login',
				logoutEndpoint: '/api/logout'
			}
		})
	})


	app.post('/login', function(req, res, next) {
		res.json({
			token: 'H3kdic8dkHjkd832jd',
			profile: {
				firstname: 'Dustin',
				lastname: 'Hoffner',
				avatarUrl: 'image'
			}
		})
	})

	app.get('/sideBar', function(req, res) {
		res.json({
			sideBar: [{
				name: 'Posts',
				pathname: '/posts',
				imageUrl: 'media/icons/channels.svg'
			}, {
				name: 'Menu',
				pathname: '/menu'
			}]
		})
	});

	app.get('/routes', function(req, res) {
		res.json({
			routes: {
				posts: {
					endpoint: '/views/posts',
					route: '/posts'
				},
				menu: {
					endpoint: '/views/menu',
					route: '/menu'
				}
			}
		})
	});

	app.get('/views/posts', function(req, res) {
		res.json({
			bauhaus: {
				name: 'SimpleWrapper',
				components: [{
					name: 'InputText',
					props: {
						defaultValue: 'core.auth.login.username',
						label: 'POSTS'
					}
				}]
			}
		});
	});

	app.get('/views/menu', function(req, res) {
		res.json({
			content: {
				name: 'SimpleWrapper',
				components: [{
					name: 'InputText',
					props: {
						defaultValue: 'core.auth.login.username',
						label: 'MENU'
					}
				}]
			}
		});
	});

	app.get('/i18n/pack/en', function(req, res) {
		var ln = [];
		ln.push(JSON.stringify({
			language: 'en'
		}));
		ln.push(JSON.stringify({
			id: '3rd.test.text',
			text: 'Test text in english.'
		}));
		res.send(ln.join('\n'));
	});

	app.get('/i18n/pack/de', function(req, res) {
		var ln = [];
		ln.push(JSON.stringify({
			language: 'de'
		}));
		ln.push(JSON.stringify({
			id: '3rd.test.text',
			text: 'Test Text in Deutsch.'
		}));
		res.send(ln.join('\n'));
	});

	return app;
}
