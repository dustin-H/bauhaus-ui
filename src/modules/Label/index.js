import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _map from 'lodash/map';

class Label extends Component {
	render() {
		const {bauhaus} = this.props;
		return (
			<div look={styles.labelWrapper}>
            <div look={styles.label}>{$(bauhaus.props.text)}</div>
				{_map(bauhaus._childrenGenerators, function(value, key) {
                  var newProps = Object.assign({}, this.props, {key: key});
						return value(newProps)
					}.bind(this))}
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(Label, styleSheet);

export default Look(Label);
