import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';

class Header extends Component {
	render() {
		const {state, actions} = this.props;
		console.log(state);
		return (
			<div look={styles.header}>
				<div look={styles.headerLeft}>
					<span key={'k1'} look={styles.inlineBlock}><img src="media/icons/menu_white.svg" look={styles.imageIcon}/></span>
					<span key={'k2'} look={styles.inlineBlock}>{state.auth.login.username}</span>
				</div>
				<div look={styles.headerRight}>
					<span key={'k3'} look={styles.inlineBlock}><img src="media/icons/search_white.svg" look={styles.imageIcon}/></span>
					<span key={'k4'} look={styles.inlineBlock} onClick={actions.router.reload}><img src="media/icons/reload_white.svg" look={styles.imageIcon}/></span>
				</div>
			</div>
		);
	}
}

/*
<div look={styles.footer}>
	<div look={styles.footerLanguage}></div>
</div>
*/

Header.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Header, styleSheet);

export default look(Header);
