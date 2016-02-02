import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import _map from 'lodash/map';
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
		var backButton = (
			<span></span>
		);
      if(state.responsive.device.smartphone === true){
         backButton = (<div look={styles.inlineBlock} onClick={actions.sideBar.toggleShow}><img src="media/icons/menu_white.svg" look={styles.imageIcon}/></div>);
      }
      var appName = (<span></span>);
      var avatar = (<span></span>);
      if(!state.responsive.device.tablet){
         appName = (<div look={styles.sideBarAppName}>
            Bauhaus UI
         </div>);
         avatar = (<div look={styles.avatar}><img src={state.auth.profile.avatarUrl} look={styles.avatarImage}/></div>);
      }
		return (
			<div look={styles.sideBar}>
				{appName}
            {backButton}
				<div look={styles.sideBarMenu}>
					{content}
					{_map(state.sideBar.list, function(value, key) {
							return (
								<SideBarListElement key={key} state={state} actions={actions} label={value.name} imageUrl={value.imageUrl || "media/icons/terms.svg"} pathname={value.pathname} tabletView={state.responsive.device.tablet}></SideBarListElement>
							)
						})}
				</div>
				<div look={styles.sideBarUser}>
					<div look={styles.logoutLine}></div>
					<div look={styles.sideBarUserLogOut} onClick={actions.auth.logout}>{$('$core.auth.logout')}</div>
					<span look={styles.name}>{state.auth.profile.firstname}&nbsp;
						{state.auth.profile.lastname}</span>
               {avatar}
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
