import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _map from 'lodash/map';

class Section extends Component {
	constructor(props) {
		super(props);
		this.toggleFoldState = this
			.toggleFoldState
			.bind(this);
	}
	toggleFoldState() {
		const {bauhaus} = this.props;
		bauhaus._setState({
			folded: !bauhaus._state.folded
		});
	}
	componentWillMount() {
		const {bauhaus} = this.props;
		var folded = false;
		if (bauhaus.props.folded === true) {
			folded = true;
		}
		bauhaus._setState({folded: folded});
	}
	render() {
		const {bauhaus} = this.props;
		return (
			<div>
				<div look={styles.section} onClick={this.toggleFoldState}>{$(bauhaus.props.text)}<hr look={styles.sectionHr}/></div>
				<div look={styles.content}>
					{_map(bauhaus._childrenGenerators, function(value, key) {
						var newProps = Object.assign({}, this.props, {key: key});
						return value(newProps)
					}.bind(this))}
				</div>
				<div look={styles.sectionEnd}></div>
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(Section, styleSheet);

export default Look(Section);
