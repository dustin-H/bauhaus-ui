import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';

class Error extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div className={styles.center}>
				<img src="media/bauhausuilogo.svg"/>
				<br/><br/><br/><br/>
				<b><big>ERROR:</big></b><br/>
				An internal error occured! Please inform your admin or see logs.
			</div>
		);
	}
}

Error.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default Look(Error);
