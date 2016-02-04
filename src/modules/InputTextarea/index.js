import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class InputTextarea extends Component {
	handleChange(event) {
		const {bauhaus, get, set} = this.props;
		var value = event.target.value;
		set(bauhaus.props.path, value);
	}
	render() {
		const {bauhaus, get, set, isValid} = this.props;
		var valid = isValid(bauhaus.props.path);
		var inputStyle = [styles.textarea];
		if (valid !== true) {
			inputStyle.push(styles.inputError);
		}
		return (
			<textarea look={inputStyle} value={get(bauhaus.props.path)} onChange={this
				.handleChange
				.bind(this)}></textarea>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(InputTextarea, styleSheet);

export default Look(InputTextarea);
