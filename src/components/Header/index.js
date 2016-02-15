import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';

class Header extends Component {
	render() {
		const {state, actions} = this.props;
		//console.log(state);
		return (
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<span key={'k1'} className={styles.inlineBlock} onClick={actions.sideBar.toggleShow}><img src="media/icons/menu_white.svg" className={styles.imageIcon}/></span>
				</div>
				<div className={styles.headerCenter}>
					<span key={'k3'} className={styles.logoWrapper}><img src="media/logo.svg" className={styles.logo}/></span>
				</div>
				<div className={styles.headerRight}>
					<span key={'k4'} className={styles.inlineBlock} onClick={actions.search.activate}><img src="media/icons/search_white.svg" className={styles.imageIcon}/></span>
					<span key={'k5'} className={styles.inlineBlock} onClick={actions.router.reload}><img src="media/icons/reload_white.svg" className={styles.imageIcon}/></span>
				</div>
			</div>
		);
	}
}

/*
<div className={styles.footer}>
	<div className={styles.footerLanguage}></div>
</div>
*/

Header.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default look(Header);
