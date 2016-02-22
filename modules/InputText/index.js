import React, {PropTypes, Component} from 'react'
import Look, {StyleSheet} from 'react-look'
const c = StyleSheet.combineStyles
import {$} from 'bauhaus-ui-module-utils'

class InputText extends Component {
	handleChange(event) {
		const {bauhaus, get, set} = this.props
		var value = event.target.value
		set(bauhaus.props.path, value)
	}
	render() {
		const {bauhaus, get, set, isValid} = this.props
		var valid = isValid(bauhaus.props.path)
		var inputStyle = [styles.textInput]
		if (valid !== true) {
			inputStyle.push(styles.inputError)
		}
		return (
			<input className={c(...inputStyle)} type="text" value={get(bauhaus.props.path)} onChange={this
				.handleChange
				.bind(this)}></input>
		)
	}
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

__GLOBAL__.exportDefault = Look(InputText)
