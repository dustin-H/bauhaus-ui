import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look/dom';

class Login extends Component {
	render() {
		console.log('Rerender Login!');
		const {state, actions} = this.props;
		return (
			<div look={styles.center}>
				<img src="media/bauhausuilogo.svg"/>
				<br/><br/><br/><br/>
         <input type="text" look={styles.input} value={'Username'}></input><br/><br/>
         <input type="password" look={styles.input} value={'Password'}></input>
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

import styleSheet from './Login.styles.js';
var styles = StyleSheet.create(Login, styleSheet);

export default Look(Login);
