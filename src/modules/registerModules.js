import {
	registerModule
}
from '../utils/moduleLoader';


import InputText from './InputText';
import Label from './Label';
import JsonForm from './JsonForm';
import Section from './Section';

var registerModules = function() {
	registerModule('InputText', InputText);
	registerModule('Label', Label);
	registerModule('JsonForm', JsonForm);
	registerModule('Section', Section);
}

export default registerModules;
