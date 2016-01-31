import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class InputEmail extends Component {
	handleChange(event) {
		const {bauhaus, get, set,} = this.props;
		var value = event.target.value;
		set(bauhaus.props.path, value);
	}
	render() {
		const {bauhaus, get, set,} = this.props;
		return (
			<input look={styles.textInput} type="email" value={get(bauhaus.props.path)} onChange={this
				.handleChange
				.bind(this)}></input>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(InputEmail, styleSheet);

export default Look(InputEmail);
