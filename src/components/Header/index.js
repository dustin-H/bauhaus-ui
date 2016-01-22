import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';

class Header extends Component {
	render() {
		const {state, actions} = this.props;
      console.log(state);
		return (
			<div look={styles.header}>
				<div look={styles.headerLeft}>
					<span look={styles.inlineBlock}><img src="media/icons/menu_white.svg" look={styles.imageIcon}/></span>
					<span look={styles.inlineBlock}>{state.auth.login.username}</span>
				</div>
				<div look={styles.headerRight}>
					<span look={styles.inlineBlock}><img src="media/icons/search_white.svg" look={styles.imageIcon}/></span>
					<span look={styles.inlineBlock}><img src="media/icons/bookmark_white.svg" look={styles.imageIcon}/></span>
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
