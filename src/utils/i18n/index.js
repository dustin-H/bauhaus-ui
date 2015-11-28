import store from './store.js';

var languagesCheck = {};
var languages = [];
if (navigator != null) {
   if (navigator.language != null) {
      var mainLn = navigator.language[0] + navigator.language[1];
      languagesCheck[mainLn] = true;
      languages.push(mainLn);
   }
   if (navigator.languages != null) {
      for (var i in navigator.languages) {
         var mainLn = navigator.languages[i][0] + navigator.languages[i][1];
         if (languagesCheck[mainLn] !== true) {
            languagesCheck[mainLn] = true;
            languages.push(mainLn);
         }
      }
   }
}
if (languagesCheck['en'] !== true) {
   languagesCheck['en'] = true;
   languages.push('en');
}

var languageComplete = languagesCheck;

export function _(id) {
	if (store[id] != null) {
		for (var i in languages) {
			if (store[id][languages[i]] != null) {
				return store[id][languages[i]];
			}
         languageComplete[languages[i]] = false;
		}
		for (var i in store[id]) {
			return store[id][i];
		}
	}
	console.error('Could not get i18n text of id [', id, ']!');
	return id;
}
