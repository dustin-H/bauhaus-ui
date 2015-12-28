var languagesCheck = {};
var languages = [];

if(navigator != null) {
	if(navigator.language != null) {
		var mainLn = navigator.language[0] + navigator.language[1];
		languagesCheck[mainLn] = true;
		languages.push(mainLn);
	}
	if(navigator.languages != null) {
		for(var i in navigator.languages) {
			var mainLn = navigator.languages[i][0] + navigator.languages[i][1];
			if(languagesCheck[mainLn] !== true) {
				languagesCheck[mainLn] = true;
				languages.push(mainLn);
			}
		}
	}
	if(languagesCheck['en'] !== true) {
		languagesCheck['en'] = true;
		languages.push('en');
	}
} else {
	languages.push('en');
	languages.push('de');
}

export default languages;
