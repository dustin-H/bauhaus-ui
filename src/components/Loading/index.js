import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';

class Loading extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div look={styles.center}>
				<img src="media/bauhausuilogo.svg"/>
				<br/><br/>
				<img src="media/loader.gif"/>
			</div>
		);
	}
}

/*
<div look={styles.footer}>
	<div look={styles.footerLanguage}></div>
</div>
*/

Loading.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Loading, styleSheet);

export default Look(Loading);
