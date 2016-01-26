import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import Route from '../Route';
import {$} from '../../utils/i18n/index.js';

const bauhaus = {
	name: 'SimpleWrapper',
	components: [
		{
			name: 'InputText',
			props: {
				defaultValue: '$core.auth.login.username',
				label: '$core.auth.login.submit'
			}
		}
	]
}

class Router extends Component {
	componentDidMount() {
		const {state, actions} = this.props;
		actions
			.router
			.loadRoutes();
	}
	render () {
		const {
			state,
			actions
		} = this.props;
		if (state.router.loading === true) {return (
				<div look={styles.center}><br/><img src="media/loader.gif"/></div>
			);}
		if (state.router.route === false) {return (
				<div look={styles.center}><br/>{$('$core.router.routeNotFound')}</div>
			);}
		return (
			<Route state={state} actions={actions}></Route>
		);

	}
}

Router.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Router, styleSheet);

export default look(Router);
