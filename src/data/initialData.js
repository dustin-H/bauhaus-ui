var data = {
	generals: {
		state: 'LOADING',
		configUrl: 'config.json'
	},
	endpoints: {
		config: 'config.json',
		entry: '/lol/hi'
	},
	config: {
		state: 'WAITING', // LOADING ERROR READY
		data: {
			entryUrl: '/test/hihi'
		}
	},
	auth: {
		state: 'WAITING',
		data: {}
	},
	i18n: {
		fallbackMode: false,
		languages: ['en', 'de'],
		store: {
			en: {
				'core.auth.fields.username': 'Username',
				'core.auth.fields.password': 'Password'
			},
			de: {
				'core.auth.fields.username': 'Benutzername',
				'core.auth.fields.password': 'Passwort'
			}
		},
		loading: 0
	}
};
export default data;
