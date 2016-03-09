var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var fs = require('fs');

var multer = require('multer')

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'testapi/uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname)
  }
})

var upload = multer({
  storage: storage
})

module.exports = function() {
  var app = express();

  app.use('/img', express.static(__dirname + '/img'))

  app.use(function(req, res, next) {
    setTimeout(function() {
      next();
    }, 0);
  })

  app.get('/long.js', function(req, res, next) {
    setTimeout(function() {
      res.set('content-type', 'application/javascript')
      res.send('__GLOBAL__.exportDefault = "LONG"')
    }, 1000 * 6);
  })

  app.get('/long2.js', function(req, res, next) {
    setTimeout(function() {
      res.set('content-type', 'application/javascript')
      res.send('__GLOBAL__.exportDefault = "LONG2"')
    }, 1000 * 6);
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
        name: 'Post',
        pathname: '/post/lol',
        imageUrl: 'media/icons/news.svg'
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
        },
        post: {
          endpoint: '/api/views/post',
          route: '/post/:id'
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
          url: '/api/formdata/posts',
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
              text: 'DateInput'
            },
            components: [{
              name: 'InputDate',
              props: {
                path: 'hallo.welt.date'
              }
            }, {
              name: 'InputDate',
              props: {
                path: 'hallo.welt.date'
              }
            }, {
              name: 'InputDate',
              props: {
                path: 'hallo.welt.date',
                dateOnly: true
              }
            }, {
              name: 'InputDate',
              props: {
                path: 'hallo.welt.date',
                timeOnly: true
              }
            }]
          }, {
            name: 'Label',
            props: {
              text: 'Dein Vorname:'
            },
            components: [{
              name: 'InputSelect',
              props: {
                path: 'hallo.welt.selectMulti',
                multiple: true,
                options: {
                  a: 'A Auswahl',
                  b: 'B Auswahl',
                  c: 'C Auswahl'
                }
              }
            }, {
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
              text: 'Scribe Input'
            },
            components: [{
              name: 'InputScribe',
              props: {
                path: 'hallo.welt.scribe'
              }
            }, {
              name: 'Validator',
              props: {
                path: 'hallo.welt.scribe',
                required: true
              }
            }]
          }, {
            name: 'Label',
            props: {
              text: 'Scribe Input'
            },
            components: [{
              name: 'InputTextarea',
              props: {
                path: 'hallo.welt.scribe'
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
            }, {
              name: 'Validator',
              props: {
                path: 'hallo.welt.number',
                required: true,
                regex: '[0-9]|[1-9][0-9]',
                failMessage: 'This needs to be between 0 and 99!'
              }
            }]
          }]
        }]
      }
    });
  });

  app.get('/views/post', function(req, res) {
    res.json({
      content: {
        name: 'JsonForm',
        props: {
          url: '/api/formdata/:id',
          title: 'Edit Post:'
        },
        components: [{
          name: 'Label',
          props: {
            text: 'Title'
          },
          components: [{
            name: 'InputFiles',
            props: {
              container: 'testcontainer_:id',
              filename: 'testfile_${time}',
              selectMin: 0,
              selectMax: 12,
              maxUploads: 10,
              path: 'files'
            }
          }, {
            name: 'Validator',
            props: {
              path: 'files',
              required: true
            }
          }]
        }, {
          name: 'Label',
          props: {
            text: 'Content'
          },
          components: [{
            name: 'InputScribe',
            props: {
              path: 'post'
            }
          }, {
            name: 'Validator',
            props: {
              path: 'post',
              required: true
            }
          }]
        }]
      }
    });
  });

  app.get('/views/menu', function(req, res) {
    var list = [];
    for (var i in theData) {
      list.push({
        name: i,
        pathname: '/post/' + i
      })
    }
    res.json({
      content: {
        name: 'SimpleLinkList',
        props: {
          title: 'Liste der sinnlosen Dinge',
          list: [
            {
              name: 'Das ist toll!',
              pathname: '/posts'
            }, {
              name: 'Hallo Welt',
              pathname: '/posts'
            }, {
              name: 'Raumfahrt',
              pathname: '/menu'
            }, {
              name: 'Es lebe der Keks!',
              pathname: '/menu'
            }
          ].concat(list)
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

  var theData = {};

  app.get('/formdata/:id', function(req, res) {
    if (theData[req.params.id] !== false) {
      if (theData[req.params.id] == null) {
        theData[req.params.id] = {};
      }
      res.json({
        jsondata: theData[req.params.id]
      });
    } else {
      res.status(404)
        .send();
    }
  });

  app.put('/formdata/:id', jsonParser, function(req, res) {
    theData[req.params.id] = req.body;
    res.send();
  });

  app.delete('/formdata/:id', function(req, res) {
    theData[req.params.id] = false;
    res.send();
  });

  app.post('/containers/:container/upload', upload.any(), function(req, res) {
    console.log('CONTAINER:', req.params.container)
    res.send('Done!')
  })

  return app;
}
