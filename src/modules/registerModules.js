import {
	registerModule
}
from '../utils/componentLoader';


import InputText from './InputText';
import SimpleWrapper from './SimpleWrapper';

var registerModules = function() {
	registerModule('InputText', InputText);
	registerModule('SimpleWrapper', SimpleWrapper);
}

export default registerModules;
