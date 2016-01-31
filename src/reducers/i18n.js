import * as types from '../constants/ActionTypes.js';
import languages from '../utils/i18n/initialLanguages.js';

const initialState = {
	fallbackMode: false,
	languages: languages,
	store: {
		en: {
			'core.auth.login.username': 'Username',
			'core.auth.login.password': 'Password',
			'core.auth.login.submit': 'Login',
			'core.auth.login.error': 'Login failed!',
			'core.auth.logout': 'LOG OUT',
         'core.router.routeNotFound': 'Page not found!',
         'core.content.error': 'Error while loading page!',
         'core.sidebar.error': 'Error while loading sidebar!',
         'core.search.error': 'Error while loading search!',
         'core.search.nothingFound': 'Nothing found!',
         'core.commons.save': 'Save',
         'core.commons.reset': 'Reset',
         'core.commons.delete': 'Delete'
		},
		de: {
			'core.auth.login.username': 'Benutzername',
			'core.auth.login.password': 'Passwort',
			'core.auth.login.submit': 'Anmelden',
			'core.auth.login.error': 'Anmeldung ist fehlgeschlagen!',
			'core.auth.logout': 'ABMELDEN',
         'core.router.routeNotFound': 'Seite nicht gefunden!',
         'core.content.error': 'Fehler beim Laden der Seite!',
         'core.sidebar.error': 'Fehler beim Laden der Sidebar!',
         'core.search.error': 'Fehler beim Laden der Suche!',
         'core.search.nothingFound': 'Nichts gefunden!',
         'core.commons.save': 'Speichern',
         'core.commons.reset': 'Zurücksetzen',
         'core.commons.delete': 'Löschen'
		}
	},
	fallbacks: [],
	loaded: {}
};

export default function i18n(state = initialState, action) {
	switch(action.type) {
		case types.I18N_PARSE_LANGUAGE:
         console.log('LN Redu', action.url);
			var newState = Object.assign({}, state);
			var generals = {
				id: null,
				language: null
			};
			for(var i in action.list) {
				var temp = action.list[i];
				if(temp.text == null) {
					if(temp.id) {
						generals.id = temp.id;
					}
					if(temp.language) {
						generals.language = temp.language;
					}
				} else {
					var id = temp.id || generals.id || null;
					var ln = temp.language || generals.language || null;
					if(id != null && ln != null) {
						if(newState.store[ln] == null) {
							newState.store[ln] = {};
						}
						newState.store[ln][id] = temp.text;
					} else {
						console.warn('Invalid line', (parseInt(temp.line) + 1), 'in language pack! [' + action.url + ']');
						if(id == null) {
							console.warn('> Missing id!');
						}
						if(ln == null) {
							console.warn('> Missing language!');
						}
					}
				}
			}
			newState.loaded[action.url] = true;
			return newState;
		case types.I18N_ADD_FALLBACKS:
			var newState = Object.assign({}, state);
			newState.fallbacks = newState.fallbacks.concat(action.fallbacks);
			return newState;
		case types.I18N_CLEAR_FALLBACKS:
			var newState = Object.assign({}, state);
			newState.fallbacks = [];
			return newState;
		case types.I18N_ENABLE_FALLBACK_LOADING:
			var newState = Object.assign({}, state);
			newState.fallbackMode = true;
			return newState;
		default:
			return state;
	}
}
