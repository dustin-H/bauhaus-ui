import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {_} from '../../utils/i18n/index.js';

class SimpleWrapper extends Component {
	render() {
		const {bauhaus} = this.props;
		return (
			<div>
				{bauhaus._childrenGenerators}
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(SimpleWrapper, styleSheet);

export default Look(SimpleWrapper);
