import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class InputText extends Component {
	handleChange(event) {
		const {bauhaus, get, set} = this.props;
		var value = event.target.value;
		set(bauhaus.props.path, value, this.validate(value));
	}
	validate(value) {
		const {bauhaus} = this.props;
		if (bauhaus.props.required === true && (value == null || value === '')) {
			return '$core.commons.errors.required';
		}
		if (bauhaus.props.regex != null && bauhaus.props.failMessage != null && typeof bauhaus.props.failMessage === 'string' && !(bauhaus.props.required !== true && (value == null || value === ''))) {
			var tempRegex = new RegExp(bauhaus.props.regex);
			if (tempRegex.test(value) === false) {
				return bauhaus.props.failMessage;
			}
		}
		return true;
	}
	componentDidMount() {
		const {bauhaus, get, set, setValidator} = this.props;
		setValidator(bauhaus.props.path, this.validate.bind(this))
	}
	render() {
		const {bauhaus, get, set, isValid} = this.props;
		var valid = isValid(bauhaus.props.path);
		var inputStyle = [styles.textInput];
		var invalidError;
		if (valid === true) {
			invalidError = (
				<span></span>
			);
		} else {
			inputStyle.push(styles.inputError);
			invalidError = (
				<span><br/>
					<span look={styles.error}>{$(valid)}</span>
				</span>
			)
		}
		return (
			<span>
				<input look={inputStyle} type="text" value={get(bauhaus.props.path)} onChange={this
					.handleChange
					.bind(this)}></input>
				{invalidError}
			</span>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(InputText, styleSheet);

export default Look(InputText);
