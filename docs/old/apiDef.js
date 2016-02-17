GET => config.json {
	endpoints: {
		entry: '/test/hihi'
	},
	languages: {
		'en': {
			url: '/ln/en',
			complete: true
		}
	}
}

GET => /   {
	auth: {
		tokenHeaderName: 'Authorization'
	},
	endpoints: {
		sideBar: '/sideBar',
		search: '/search',
		views: '/views',
		loginEndpoint: '/login',
		logoutEndpoint: '/logout'
	}
}

GET => /   {
	sidebar: [{
		name: 'core.sidebar.news',
		route: '/news',
		views: '/views',
		loginEndpoint: '/login',
		logoutEndpoint: '/logout'
	}]
}

POST => /login
SEND => {
	username: 'Admin',
	password: 'pw'
}
REC => {
	token: 'sA32mK93NKLun83fk43f',
	profile: {
		firstname: ''
	}
}

GET => /views {
posts: {
	endpoint: '/views/posts',
	route: '/posts/:id'
}
menu: {
	endpoint: '/views/menu',
	route: '/menu/:id'
}
}

GET => /views/posts {
	title: 'Posts',
	params: ['id'],
	components: [{
		name: 'CTitle',
		props: {
			text: '#3rd.posts.title'
		}
	}, {
		name: 'WForm',
		props: {
			initialDataUrl: '/views/posts/get/:id',
			formSubmitUrl: '/views/posts/set/:id'
		},
		components: [{
			name: 'WFormSection',
			props: {
				text: '#3rd.posts.section.1'
			},
			components: []
		}]
	}]
}
