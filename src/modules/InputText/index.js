import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {_} from '../../utils/i18n/index.js';

class InputText extends Component {
	render() {
		const {defaultValue, label} = this.props;
		return (
			<span>
				<span>{_(label)}</span>
         <input look={styles.textInput} type="text" defaultValue={_(defaultValue)}></input>
			</span>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(InputText, styleSheet);

export default Look(InputText);
