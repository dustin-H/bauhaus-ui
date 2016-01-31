var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function() {

	var app = express();

	app.use(function(req, res, next) {
		setTimeout(function() {
			next();
		}, 300);
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
				avatarUrl: 'testapi/steve-jobs.jpg'
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
					endpoint: '/api/views/posts',
					route: '/posts'
				},
				menu: {
					endpoint: '/api/views/menu',
					route: '/menu'
				}
			}
		})
	});

	app.get('/views/posts', function(req, res) {
		res.json({
         /*modules: {
            InputText: '/modules/InputText/build/bundle.js'
         },*/
			content: {
				name: 'JsonForm',
				props: {
					url: '/api/formdata',
					title: 'Mein schönes Testformular'
				},
				components: [{
					name: 'Section',
					props: {
						text: 'Meine Sektion'
					},
					components: [{
						name: 'Label',
						props: {
							text: 'POSTS NEU LABEL'
						},
						components: [{
							name: 'InputText',
							props: {
								path: 'hallo.welt.test'
							}
						}]
					}, {
						name: 'Label',
						props: {
							text: 'Dein Vorname:'
						},
						components: [{
							name: 'InputPassword',
							props: {
								path: 'hallo.welt.nix'
							}
						}]
					}]
				}, {
					name: 'Section',
					props: {
						text: 'Meine Sektion'
					},
					components: [{
						name: 'Label',
						props: {
							text: 'POSTS NEU LABEL'
						},
						components: [{
							name: 'InputText',
							props: {
								path: 'hallo.welt.test'
							}
						}]
					}, {
						name: 'Label',
						props: {
							text: 'Dein Vorname:'
						},
						components: [{
							name: 'InputText',
							props: {
								path: 'hallo.welt.nix'
							}
						}]
					}]
				}, {
					name: 'Label',
					props: {
						text: 'Meine Email:'
					},
					components: [{
						name: 'InputEmail',
						props: {
							path: 'hallo.welt.email'
						}
					}]
				}, {
					name: 'Label',
					props: {
						text: 'Meine Email als Text:'
					},
					components: [{
						name: 'InputText',
						props: {
							path: 'hallo.welt.email'
						}
					}]
				}]
			}
		});
	});

	app.get('/views/menu', function(req, res) {
		res.json({
			"i18n": {
				"packB": {
					"en": {
						"complete": true,
						"url": "/api/i18n/pack/en"
					},
					"de": {
						"complete": true,
						"url": "/api/i18n/pack/de"
					}
				}
			},
			content: {
				name: 'SimpleWrapper',
				components: [{
					name: 'InputText',
					props: {
						defaultValue: '$core.auth.login.username',
						text: 'MENU'
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

	app.get('/search', function(req, res) {
		res.json({
			searchResults: [{
				title: 'Posts',
				pathname: '/posts',
				description: 'This is a very nice description of the regarding result! ' + JSON.stringify(req.query)
			}, {
				title: 'Menu',
				pathname: '/menu',
				description: 'This is a very nice description of the regarding result!'
			}]
		})
	});

	var myData = {
		hallo: {
			welt: {
				test: "Das ist der Test Inhalt"
			}
		}
	};

	app.get('/formdata', function(req, res) {
		if(myData != null) {
			res.json({
				jsondata: myData
			});
		}
		else {
			res.status(404)
				.send();
		}
	});

	app.put('/formdata', jsonParser, function(req, res) {
		myData = req.body;
		res.send();
	});

	app.delete('/formdata', function(req, res) {
		myData = null;
		res.send();
	});

	return app;
}
