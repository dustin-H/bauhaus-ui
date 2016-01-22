import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {_} from '../../utils/i18n/index.js';

class Login extends Component {
	onChange(key) {
		return function(event) {
			this.props.actions.auth.loginOnChange(key, event.target.value);
		}
	}
	onSubmit (evt) {evt.preventDefault();
		this
			.props
			.actions
			.auth
			.loginSubmit();
		return false;}

	render () {
		const {
			state,
			actions
		} = this.props;

		console.log(JSON.parse(JSON.stringify(state)));

		var errorOutput = (
			<span></span>
		);
		if (state.auth.error === true && state.auth.loginLoading === false) {
			errorOutput = (
				<span look={styles.errorMessage}>{_('core.auth.login.error')}</span>
			)
		}
		var content = (
			<form onSubmit={this
				.onSubmit
				.bind(this)}>
				<input type="text" look={styles.input} placeholder={_('core.auth.login.username')} value={state.auth.login.username} onChange={this
					.onChange('username')
					.bind(this)}></input><br/><br/>
				<input type="password" look={styles.input} value={state.auth.login.password} placeholder={_('core.auth.login.password')} onChange={this
					.onChange('password')
					.bind(this)}></input><br/><br/>
				<input type="submit" look={styles.button} value={_('core.auth.login.submit')}></input>
			</form>
		);
		if (state.auth.loginLoading === true) {
			content = (
				<img src="media/loader.gif"/>
			);
		}

		return (
			<div look={styles.center}>
				<img src="media/bauhausuilogo.svg"/>
				<br/><br/><br/><br/>
				{content}<br/>
				{errorOutput}
			</div>
		);
	}
}

/*
<div look={styles.footer}>
	<div look={styles.footerLanguage}></div>
</div>
*/

Login.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Login, styleSheet);

export default Look(Login);
