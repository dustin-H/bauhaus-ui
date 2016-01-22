import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class InputText extends Component {
	render() {
		const {bauhaus, some} = this.props;
		return (
			<span>
				<span>{$(bauhaus.props.label)}
					+
					{some}</span>
				<input look={styles.textInput} type="text" defaultValue={$(bauhaus.props.defaultValue)}></input>
			</span>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(InputText, styleSheet);

export default Look(InputText);
