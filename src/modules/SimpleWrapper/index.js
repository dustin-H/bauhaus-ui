import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _ from 'lodash';

class SimpleWrapper extends Component {
	render() {
		const {bauhaus} = this.props;
		return (
			<div>
				{_
					.map(bauhaus._childrenGenerators, function(value, key) {
						return value({some: 'props HAHA', key: key})
					})}
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(SimpleWrapper, styleSheet);

export default Look(SimpleWrapper);
