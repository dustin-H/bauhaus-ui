var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var fs = require('fs');

module.exports = function() {

	var app = express();

  app.use('/img', express.static(__dirname + '/img'))

	/*app.use(function(req, res, next) {
		setTimeout(function() {
			next();
		}, 300);
	})*/

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
				avatarUrl: 'api/img/steve-jobs.jpg'
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
					name: 'Condition',
					props: {
						valueA: 'Hui abc',
						pathB: 'hallo.welt.test',
						operator: '=='
					},
					components: [{
						name: 'Label',
						props: {
							text: 'Label 1 erscheint wenn es stimmt!'
						},
						components: []
					}, {
						name: 'Label',
						props: {
							text: 'Label 2 erscheint wenn es nicht stimmt!'
						},
						components: []
					}]
				}, {
					name: 'Section',
					props: {
						text: 'EINS EINS EINS',
						folded: false
					},
					components: [{
						name: 'Label',
						props: {
							text: 'POSTS NEU LABEL',
							info: 'Please write some nice words! It would be nice if your words are not colored red, because otherwise they will not be sent!'
						},
						components: [{
							name: 'InputText',
							props: {
								path: 'hallo.welt.test'
							}
						}, {
							name: 'Validator',
							props: {
								path: 'hallo.welt.test',
								required: true,
								regex: 'abc',
								failMessage: 'This needs to include "abc"!'
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
						}, {
							name: 'Validator',
							props: {
								path: 'hallo.welt.nix',
								required: true,
								regex: '........',
								failMessage: 'This needs to have at least 8 characters!'
							}
						}]
					}, {
						name: 'Label',
						props: {
							text: 'Textarea:'
						},
						components: [{
							name: 'InputTextarea',
							props: {
								path: 'hallo.welt.textarea'
							}
						}, {
							name: 'Validator',
							props: {
								path: 'hallo.welt.textarea',
								required: true,
								regex: '........',
								failMessage: 'This needs to have at least 8 characters!'
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
							name: 'InputScribe',
							props: {
								path: 'hallo.welt.test2'
							}
						}, {
							name: 'Validator',
							props: {
								path: 'hallo.welt.test2',
								required: true,
								regex: 'abc',
								failMessage: 'This needs to include abc!'
							}
						}]
					}, {
						name: 'Label',
						props: {
							text: 'Dein Vorname:'
						},
						components: [{
							name: 'InputCheckbox',
							props: {
								path: 'hallo.welt.checkbox'
							}
						}, {
							name: 'Validator',
							props: {
								path: 'hallo.welt.checkbox',
								required: true,
								regex: 'true',
								failMessage: 'This needs to be selected!'
							}
						}]
					}, {
						name: 'Label',
						props: {
							text: 'Meine Select:'
						},
						components: [{
							name: 'InputSelect',
							props: {
								path: 'hallo.welt.select',
								options: {
									a: 'A Auswahl',
									b: 'B Auswahl',
									c: 'C Auswahl'
								}
							}
						}, {
							name: 'Validator',
							props: {
								path: 'hallo.welt.select',
								required: true,
								regex: '[a-b]',
								failMessage: 'This needs to be A or B!'
							}
						}]
					}, {
						name: 'Label',
						props: {
							text: 'InputNumber:'
						},
						components: [{
							name: 'InputNumber',
							props: {
								path: 'hallo.welt.number'
							}
						}]
					}]
				}]
			}
		});
	});

	app.get('/views/menu', function(req, res) {
		res.json({
			content: {
				name: 'SimpleLinkList',
				props: {
          title: 'Liste der sinnlosen Dinge',
          list: [
            {
              name: 'Das ist toll!'
            },{
              name: 'Hallo Welt'
            },{
              name: 'Raumfahrt'
            },{
              name: 'Es lebe der Keks!'
            }
          ]
        }
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
