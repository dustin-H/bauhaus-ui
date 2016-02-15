import {
	registerModule
}
from '../utils/moduleLoader';


import InputText from './InputText';
import Label from './Label';
import JsonForm from './JsonForm';
import Section from './Section';
import InputPassword from './InputPassword';
import InputTextarea from './InputTextarea';
import Validator from './Validator';
import Condition from './Condition';
import InputScribe from './InputScribe';
import InputCheckbox from './InputCheckbox';

var registerModules = function() {
	registerModule('InputText', InputText);
	registerModule('Label', Label);
	registerModule('JsonForm', JsonForm);
	registerModule('Section', Section);
	registerModule('InputPassword', InputPassword);
	registerModule('InputTextarea', InputTextarea);
	registerModule('Validator', Validator);
	registerModule('Condition', Condition);
	registerModule('InputScribe', InputScribe);
	registerModule('InputCheckbox', InputCheckbox);
}

export default registerModules;
