import {
	registerModule
}
from '../utils/moduleLoader';


import InputText from './InputText';
import SimpleWrapper from './SimpleWrapper';

var registerModules = function() {
	registerModule('InputText', InputText);
	registerModule('SimpleWrapper', SimpleWrapper);
}

export default registerModules;
