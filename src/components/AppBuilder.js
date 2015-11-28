import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look/dom';

class AppBuilder extends Component {
	render() {
		console.log('Rerender!');
		const {blocks, actions} = this.props;
		const data = blocks.data;
		document.title = blocks.title;
		return (
			<div>
				<div look={styles.wrapper}>
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
							Dustin Hoffner
						</div>
					</div>
					<div look={styles.mainFrame}>
						<div look={styles.header}>
							<div look={styles.headerLeft}>
								<span look={styles.inlineBlock}><img src="media/icons/menu_white.svg" look={styles.imageIcon}/></span>
								<span look={styles.inlineBlock}>ADMIN</span>
							</div>
							<div look={styles.headerRight}>
								<span look={styles.inlineBlock}><img src="media/icons/search_white.svg" look={styles.imageIcon}/></span>
								<span look={styles.inlineBlock}><img src="media/icons/bookmark_white.svg" look={styles.imageIcon}/></span>
							</div>
						</div>
						<div look={styles.contentWrapper}>
							<div look={styles.content}>
								<span look={styles.contentHeadline}>User</span><hr look={styles.contentHr}/><br/><br/>
								<table look={styles.formTable}>
									<tbody>
										<tr look={styles.tableTr}>
											<td look={styles.frontTdHeadLine}>
												User
											</td>
											<td look={styles.backTd}>
												<hr look={styles.formHr}/>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												First Name
											</td>
											<td look={styles.backTd}>
												<input key={'i1'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Last Name
											</td>
											<td look={styles.backTd}>
												<input key={'i2'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Nickname
											</td>
											<td look={styles.backTd}>
												<input key={'i3'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTdHeadLine}>
												Address
											</td>
											<td look={styles.backTd}>
												<hr look={styles.formHr}/>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Street
											</td>
											<td look={styles.backTd}>
												<input key={'i4'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												City
											</td>
											<td look={styles.backTd}>
												<input key={'i5'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Country
											</td>
											<td look={styles.backTd}>
												<input key={'i6'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
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

AppBuilder.propTypes = {
	blocks: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './AppBuilder.styles.js';
var styles = StyleSheet.create(AppBuilder, styleSheet);

export default Look(AppBuilder);
