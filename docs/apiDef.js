GET => /   {
auth: {
		loginEndpoint: '/login',
		logoutEndpoint: {
			url: '/logout',
			map: {
				res: {
					token: 'id'
				}
				req: {
					user: 'email'
				}
			}
		},
		fields: {
			email: '#core-login-email',
			password: '#core-login-password'
		},
		token: {
			type: 'HEADER',
			name: 'Authorization'
		}
	},
	endpoints: {
		sideBarHierarchy: '/sideBarHierarchy',
		sideBarInbox: '/sideBarInbox',
		sideBarEvents: '/sideBarEvents',
		search: '/search',
		language: '/language',
		views: '/views'
	},
	language: 'en',
}

POST => /login
SEND => {
	username: 'Admin',
	password: 'pw'
}
REC => {
	username: 'Admin',
	apiKey: 'sA32mK93NKLun83fk43f',
	language: 'en'

}

GET => /views {
posts: {
	endpoint: '/views/posts',
	name: '#extern-posts-name'
}
menu: {
	endpoint: '/views/posts',
	name: '#extern-menu-name'
}
}

GET => /views/posts {
	name: 'Posts',
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
