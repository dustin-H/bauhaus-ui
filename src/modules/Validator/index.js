import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class Validator extends Component {
	validate(value) {
		const {bauhaus} = this.props;
		if (bauhaus.props.required === true && (value == null || value === '')) {
			return '$core.commons.errors.required';
		}
		if (bauhaus.props.regex != null && bauhaus.props.failMessage != null && typeof bauhaus.props.failMessage === 'string' && !(bauhaus.props.required !== true && (value == null || value === ''))) {
			var tempRegex = new RegExp(bauhaus.props.regex);
			if (tempRegex.test(value) === false) {
				return bauhaus.props.failMessage;
			}
		}
		return true;
	}
	componentDidMount() {
		const {bauhaus, setValidator} = this.props;
		setValidator(bauhaus.props.path, this.validate.bind(this))
	}
	render() {
		const {bauhaus, isValid} = this.props;
		var valid = isValid(bauhaus.props.path);
		if (valid !== true) {
			return (
				<span><br/>
					<span look={styles.error}>{$(valid)}</span>
				</span>
			)
		}
		return (
			<span></span>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(Validator, styleSheet);

export default Look(Validator);
