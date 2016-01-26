import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import _ from 'lodash';
import SideBarListElement from '../SideBarListElement';
import {$} from '../../utils/i18n/index.js';

class SideBar extends Component {
	componentDidMount() {
		const {state, actions} = this.props;
		actions
			.sideBar
			.load();
	}
	render () {
		const {
			state,
			actions
		} = this.props;
		var content = (
			<span></span>
		);
		if (state.sideBar.loading === true) {
			content = (
				<div look={styles.center}><br/><img src="media/loader.gif"/></div>
			);
		}
		if (state.sideBar.error === true) {
			content = (
				<div look={styles.centerError}><br/>{$('$core.sidebar.error')}</div>
			);
		}
		return (
			<div look={styles.sideBar}>
				<div look={styles.sideBarAppName}>
					Bauhaus UI
				</div>
				<div look={styles.sideBarMenu}>
					<br/>
					{content}
					{_
						.map(state.sideBar.list, function(value, key) {
							return (
								<SideBarListElement key={key} state={state} actions={actions} label={value.name} imageUrl={value.imageUrl || "media/icons/terms.svg"} pathname={value.pathname}></SideBarListElement>
							)
						})}
				</div>
				<div look={styles.sideBarUser}>
					<div look={styles.sideBarUserLogOut} onClick={actions.auth.logout}>{$('$core.auth.logout')}</div>
            <span look={styles.name}>{state.auth.profile.firstname}&nbsp;
						{state.auth.profile.lastname}</span>
               <div look={styles.avatar}><img src={state.auth.profile.avatarUrl} look={styles.avatarImage}/></div>
				</div>
			</div>
		);
	}
}

SideBar.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(SideBar, styleSheet);

export default look(SideBar);
