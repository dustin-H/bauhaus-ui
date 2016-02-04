import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class InputText extends Component {
	handleChange(event) {
		const {bauhaus, get, set} = this.props;
		var value = event.target.value;
		set(bauhaus.props.path, value);
	}
	render() {
		const {bauhaus, get, set, isValid} = this.props;
		var valid = isValid(bauhaus.props.path);
		var inputStyle = [styles.textInput];
		if (valid !== true) {
			inputStyle.push(styles.inputError);
		}
		return (
			<input look={inputStyle} type="text" value={get(bauhaus.props.path)} onChange={this
				.handleChange
				.bind(this)}></input>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(InputText, styleSheet);

export default Look(InputText);
