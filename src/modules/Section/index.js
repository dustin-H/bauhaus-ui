import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _ from 'lodash';

class Section extends Component {
	render() {
		const {bauhaus} = this.props;
		return (
			<div>
            <div look={styles.section}>{$(bauhaus.props.label)}<hr look={styles.sectionHr}/></div>
				{_
					.map(bauhaus._childrenGenerators, function(value, key) {
                  var newProps = Object.assign({}, this.props, {key: key});
						return value(newProps)
					}.bind(this))}
            <div look={styles.sectionEnd}></div>
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(Section, styleSheet);

export default Look(Section);