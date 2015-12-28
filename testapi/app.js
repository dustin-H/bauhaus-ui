var express = require('express');

module.exports = function() {

	var app = express()

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

	app.get('/views', function(req, res) {
		res.json({
			posts: {
				endpoint: '/views/posts',
				route: '/posts/:id'
			},
			menu: {
				endpoint: '/views/menu',
				route: '/menu/:id'
			}
		})
	});

	return app;
}
