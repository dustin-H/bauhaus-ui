import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import SideBar from '../SideBar';
import Header from '../Header';
import Content from '../Content';
import Search from '../Search';

class App extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div>
				<div className={styles.wrapper}>
					<SideBar state={state} actions={actions}></SideBar>
					<div className={styles.mainFrame}>
						<Header state={state} actions={actions}></Header>
						<Content state={state} actions={actions}></Content>
						<Search state={state} actions={actions}></Search>
					</div>
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

App.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default Look(App);
