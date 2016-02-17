import React, {PropTypes, Component,} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _map from 'lodash/map';

class Condition extends Component {
	render() {
		const {bauhaus, get} = this.props;
		var isTrue = false;

		if (bauhaus.props.operator != null) {
			var valueA = null;
			if (bauhaus.props.valueA != null) {
				valueA = $(bauhaus.props.valueA);
			}
			if (bauhaus.props.pathA != null) {
				valueA = get(bauhaus.props.pathA);
			}
			var valueB = null;
			if (bauhaus.props.valueB != null) {
				valueB = $(bauhaus.props.valueB);
			}
			if (bauhaus.props.pathB != null) {
				valueB = get(bauhaus.props.pathB);
			}
			switch (bauhaus.props.operator) {
				case '>':
					isTrue = valueA > valueB;
					break;
				case '<':
					isTrue = valueA < valueB;
					break;
				case '==':
					isTrue = valueA == valueB;
					break;
				case '===':
					isTrue = valueA === valueB;
					break;
				case '!=':
					isTrue = valueA != valueB;
					break;
				case '!==':
					isTrue = valueA !== valueB;
					break;
				case '>=':
					isTrue = valueA >= valueB;
					break;
				case '<=':
					isTrue = valueA <= valueB;
					break;
				default:
					console.warn('Operator [' + bauhaus.props.operator + '] is not available!');
			}
		}

		var child = bauhaus._childrenGenerators[1];
		if (isTrue === true) {
			child = bauhaus._childrenGenerators[0];
		}
		var newProps = Object.assign({}, this.props);
		return child(newProps);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default Look(Condition);
