
/*import react from 'react';
import dom from 'react-dom';
import superagent from 'superagent';
import lodash from 'lodash';
import moment from 'moment';
import look from 'react-look';

import superagentPlugin from '../helpers/superagentPlugin.js';
import {$} from '../i18n/index.js';*/

__GLOBAL__.npm = {
	react: require('react'),
	'react-dom': require('react-dom'),
	superagent: require('superagent'),
	lodash: require('lodash'),
	'react-look': require('react-look')
};

__GLOBAL__.bauhaus = {
	superagentPlugin: require('../helpers/superagentPlugin.js'),
	$: require('../i18n/index.js')
		.$
}

/*
import react from 'react';
import dom from 'react-dom';
import superagent from 'superagent';
import lodash from 'lodash';
import moment from 'moment';
import look from 'react-look';

import superagentPlugin from '../helpers/superagentPlugin.js';
import {
	$
}
from '../i18n/index.js';

__GLOBAL__.npm = {
	react: () => react,
	'react-dom': () => dom,
	superagent: () => superagent,
	lodash: () => lodash,
	moment: () => moment,
	'react-look': () => look
};

__GLOBAL__.bauhaus = {
	superagentPlugin: () => superagentPlugin,
	$: () => $
}
*/
