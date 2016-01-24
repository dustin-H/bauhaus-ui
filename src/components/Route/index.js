import Loader from '../Loader';
import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class Route extends Component {
	componentDidMount() {
		const {state, actions} = this.props;
		actions
			.content
			.loadCurrentRoute();
	}
	componentWillReceiveProps (nextProps) {
		const {
			state,
			actions
		} = this.props;
		const nextState = nextProps.state;
		if (state.router.location.key !== nextState.router.location.key) {actions.content.loadCurrentRoute();}
	}
	render () {
		const {
			state,
			actions
		} = this.props;
		if (state.content.loading === true) {return (
				<div look={styles.center}><br/><img src="media/loader.gif"/></div>
			);} else {
			if (state.content.data === false) {return (
					<div look={styles.center}><br/>{$('$core.router.routeNotFound')}</div>
				);} else {return (
					<Loader bauhaus={state.content.data}></Loader>
				);}
		}
	}
}

Route.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Route, styleSheet);

export default look(Route);
