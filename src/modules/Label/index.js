import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _map from 'lodash/map';

class Label extends Component {
	constructor(props) {
		super(props);
		this.toggleInfoState = this
			.toggleInfoState
			.bind(this);
	}
	toggleInfoState() {
		const {bauhaus} = this.props;
		bauhaus._setState({
			infoActive: !bauhaus._state.infoActive
		});
	}
	componentWillMount() {
		const {bauhaus} = this.props;
		bauhaus._setState({infoActive: false});
	}
	render() {
		const {bauhaus} = this.props;
		var infobox = '';
		var info = '';
		if (bauhaus.props.info != null) {
			info = (
				<span>&nbsp;&nbsp;
					<span look={styles.info} onClick={this.toggleInfoState}>INFO</span>
				</span>
			);
			if (bauhaus._state.infoActive === true) {
				infobox = (
					<div look={styles.infobox}>{$(bauhaus.props.info)}</div>
				);
			}
		}
		return (
			<div look={styles.labelWrapper}>
				<div look={styles.label}>{$(bauhaus.props.text)}{info}</div>
				{infobox}
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
