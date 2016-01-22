import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import SideBar from '../SideBar';
import Header from '../Header';
import Content from '../Content';

class App extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div>
				<div look={styles.wrapper}>
					<SideBar state={state} actions={actions}></SideBar>
					<div look={styles.mainFrame}>
						<Header state={state} actions={actions}></Header>
						<Content state={state} actions={actions}></Content>
					</div>
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

App.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(App, styleSheet);

export default Look(App);
