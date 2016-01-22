import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';

class SideBar extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div look={styles.sideBar}>
				<div look={styles.sideBarAppName}>
					{/*<span className="fa-stack fa-lg">
         <i className="fa fa-square fa-stack-2x"></i>
         <i className="fa fa-terminal fa-stack-1x fa-inverse"></i>
      </span>*/}
					{/*<i className="fa fa-cog"></i>*/}
					Bauhaus UI
				</div>
				<div look={styles.sideBarLogo}>
					{/*<img look={styles.sideBarLogoImg} src={'bauhaus.svg'}/>*/}
				</div>
				<div look={styles.sideBarMenu}>
					<div key={'j1'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/news.svg" look={styles.imageIcon}/>
						</span>News</div>
					<div key={'j2'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/channels.svg" look={styles.imageIcon}/>
						</span>Menu</div>
					<div key={'j3'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/bookmarks.svg" look={styles.imageIcon}/>
						</span>Projects</div>
					<div key={'j4'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/overview.svg" look={styles.imageIcon}/>
						</span>Gallery</div>
					<div key={'j5'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/calendar.svg" look={styles.imageIcon}/>
						</span>About Me</div>
					<div key={'j6'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/profile.svg" look={styles.imageIcon}/>
						</span>Users</div>
					<div key={'j7'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/widgets.svg" look={styles.imageIcon}/>
						</span>Banking</div>
					<div key={'j8'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/timeline.svg" look={styles.imageIcon}/>
						</span>Timeline</div>
					<div key={'j9'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/settings.svg" look={styles.imageIcon}/>
						</span>Settings</div>
					<div key={'j10'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/mail.svg" look={styles.imageIcon}/>
						</span>Mail</div>
					<div key={'j11'} look={styles.sideBarListElement}>
						<span look={styles.menuIcon}>
							<img src="media/icons/terms.svg" look={styles.imageIcon}/>
						</span>Terms</div>
				</div>
				<div look={styles.sideBarHistory}></div>
				<div look={styles.sideBarInbox}></div>
				{/*<div look={styles.sideBarSwitch}>
      <div key={'b1'} look={styles.sideBarSelect}>MENU</div>
      <div key={'b2'} look={styles.sideBarSelect}>INBOX</div>
      <div key={'b3'} look={styles.sideBarSelect}>EVENTS</div>
   </div>*/}
				<div look={styles.sideBarUser}>
					<div look={styles.sideBarUserLogOut}>Log out</div>
					{state.auth.profile.firstname} {state.auth.profile.lastname}
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

SideBar.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(SideBar, styleSheet);

export default look(SideBar);
