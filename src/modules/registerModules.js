import {
	registerModule
}
from '../utils/moduleLoader';


import InputText from './InputText';
import Label from './Label';
import JsonForm from './JsonForm';
import Section from './Section';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import InputTextarea from './InputTextarea';

var registerModules = function() {
	registerModule('InputText', InputText);
	registerModule('Label', Label);
	registerModule('JsonForm', JsonForm);
	registerModule('Section', Section);
	registerModule('InputPassword', InputPassword);
	registerModule('InputEmail', InputEmail);
	registerModule('InputTextarea', InputTextarea);
}

export default registerModules;
