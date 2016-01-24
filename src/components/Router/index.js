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
			);} else {
			if (state.router.route === false) {
            return (
					<div look={styles.center}><br/>{$('$core.router.routeNotFound')}</div>
				);
         } else {
				return (
					<Route state={state} actions={actions}></Route>
				);
			}

		}

		return (
			<div look={styles.contentWrapper}>
				<div look={styles.content}>
					<span look={styles.contentHeadline}>User</span><hr look={styles.contentHr}/><br/><br/>
					<Loader bauhaus={bauhaus}></Loader>
					<br/>
				</div>
			</div>
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
