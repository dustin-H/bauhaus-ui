import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';

class AppBuilder extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div>
				<div className={styles.wrapper}>
					<div className={styles.sideBar}>
						<div className={styles.sideBarAppName}>
							{/*<span className="fa-stack fa-lg">
								<i className="fa fa-square fa-stack-2x"></i>
								<i className="fa fa-terminal fa-stack-1x fa-inverse"></i>
							</span>*/}
							{/*<i className="fa fa-cog"></i>*/}
							Bauhaus UI
						</div>
						<div className={styles.sideBarLogo}>
							{/*<img className={styles.sideBarLogoImg} src={'bauhaus.svg'}/>*/}
						</div>
						<div className={styles.sideBarMenu}>
							<div key={'j1'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/news.svg" className={styles.imageIcon}/>
								</span>News</div>
							<div key={'j2'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/channels.svg" className={styles.imageIcon}/>
								</span>Menu</div>
							<div key={'j3'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/bookmarks.svg" className={styles.imageIcon}/>
								</span>Projects</div>
							<div key={'j4'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/overview.svg" className={styles.imageIcon}/>
								</span>Gallery</div>
							<div key={'j5'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/calendar.svg" className={styles.imageIcon}/>
								</span>About Me</div>
							<div key={'j6'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/profile.svg" className={styles.imageIcon}/>
								</span>Users</div>
							<div key={'j7'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/widgets.svg" className={styles.imageIcon}/>
								</span>Banking</div>
							<div key={'j8'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/timeline.svg" className={styles.imageIcon}/>
								</span>Timeline</div>
							<div key={'j9'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/settings.svg" className={styles.imageIcon}/>
								</span>Settings</div>
							<div key={'j10'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/mail.svg" className={styles.imageIcon}/>
								</span>Mail</div>
							<div key={'j11'} className={styles.sideBarListElement}>
								<span className={styles.menuIcon}>
									<img src="media/icons/terms.svg" className={styles.imageIcon}/>
								</span>Terms</div>
						</div>
						<div className={styles.sideBarHistory}></div>
						<div className={styles.sideBarInbox}></div>
						{/*<div className={styles.sideBarSwitch}>
							<div key={'b1'} className={styles.sideBarSelect}>MENU</div>
							<div key={'b2'} className={styles.sideBarSelect}>INBOX</div>
							<div key={'b3'} className={styles.sideBarSelect}>EVENTS</div>
						</div>*/}
						<div className={styles.sideBarUser}>
							<div className={styles.sideBarUserLogOut}>Log out</div>
							Dustin Hoffner
						</div>
					</div>
					<div className={styles.mainFrame}>
						<div className={styles.header}>
							<div className={styles.headerLeft}>
								<span className={styles.inlineBlock}><img src="media/icons/menu_white.svg" className={styles.imageIcon}/></span>
								<span className={styles.inlineBlock}>ADMIN</span>
							</div>
							<div className={styles.headerRight}>
								<span className={styles.inlineBlock}><img src="media/icons/search_white.svg" className={styles.imageIcon}/></span>
								<span className={styles.inlineBlock}><img src="media/icons/bookmark_white.svg" className={styles.imageIcon}/></span>
							</div>
						</div>
						<div className={styles.contentWrapper}>
							<div className={styles.content}>
								<span className={styles.contentHeadline}>User</span><hr className={styles.contentHr}/><br/><br/>
								<table className={styles.formTable}>
									<tbody>
										<tr className={styles.tableTr}>
											<td className={styles.frontTdHeadLine}>
												User
											</td>
											<td className={styles.backTd}>
												<hr className={styles.formHr}/>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTd}>
												First Name
											</td>
											<td className={styles.backTd}>
												<input key={'i1'} className={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTd}>
												Last Name
											</td>
											<td className={styles.backTd}>
												<input key={'i2'} className={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTd}>
												Nickname
											</td>
											<td className={styles.backTd}>
												<input key={'i3'} className={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTdHeadLine}>
												Address
											</td>
											<td className={styles.backTd}>
												<hr className={styles.formHr}/>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTd}>
												Street
											</td>
											<td className={styles.backTd}>
												<input key={'i4'} className={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTd}>
												City
											</td>
											<td className={styles.backTd}>
												<input key={'i5'} className={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr className={styles.tableTr}>
											<td className={styles.frontTd}>
												Country
											</td>
											<td className={styles.backTd}>
												<input key={'i6'} className={styles.textInput} type="text"></input>
											</td>
										</tr>
									</tbody>
								</table>
                        <br/>
							</div>
						</div>
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

AppBuilder.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default look(AppBuilder);
