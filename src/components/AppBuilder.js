import React, {
	PropTypes,
	Component
} from 'react';
import Look, {
	StyleSheet
} from 'react-look/dom';

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
						<div look={styles.sideBarAppName}>Bauhaus</div>
						<div look={styles.sideBarLogo}>
							<img src={'bauhaus.svg'} look={styles.sideBarLogoImg}/>
						</div>
						<div look={styles.sideBarMenu}>
							<div look={styles.sideBarListElement} key={'j1'}>Posts</div>
							<div look={styles.sideBarListElement} key={'j2'}>Menu</div>
							<div look={styles.sideBarListElement} key={'j3'}>Projects</div>
							<div look={styles.sideBarListElement} key={'j4'}>Gallery</div>
							<div look={styles.sideBarListElement} key={'j5'}>About Me</div>
							<div look={styles.sideBarListElement} key={'j6'}>Users</div>
							<div look={styles.sideBarListElement} key={'j7'}>Banking</div>
						</div>
						<div look={styles.sideBarHistory}></div>
						<div look={styles.sideBarInbox}></div>
						<div look={styles.sideBarSwitch}></div>
					</div>
					<div look={styles.mainFrame}>
						<div look={styles.header}>
							<div look={styles.headerSettingsButton}></div>
							<div look={styles.headerUser}>ADMIN</div>
							<input type="search" placeholder="Search" look={styles.headerSearchBox}/>
						</div>

						<div look={styles.contentWrapper}>
							<div look={styles.content}>
								<span look={styles.contentHeadline}>Das Ist ein Test</span><hr look={styles.contentHr}/>
								<table look={styles.formTable}>
									<tbody>
										<tr look={styles.tableTr}>
											<td look={styles.frontTdHeadLine}>
												User:
											</td>
											<td look={styles.backTd}>
												<hr look={styles.formHr}/>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												First Name:
											</td>
											<td look={styles.backTd}>
												<input key={'i1'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Last Name:
											</td>
											<td look={styles.backTd}>
												<input key={'i2'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Nickname:
											</td>
											<td look={styles.backTd}>
												<input key={'i3'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<table look={styles.formTable}>
													<tbody>
														<tr look={styles.tableTr}>
															<td look={styles.frontTdHeadLine}>
																Address:
															</td>
															<td look={styles.backTd}>
																<hr look={styles.formHr}/>
															</td>
														</tr>
														<tr look={styles.tableTr}>
															<td look={styles.frontTd}>
																Street:
															</td>
															<td look={styles.backTd}>
																<input key={'i4'} look={styles.textInput} type="text"></input>
															</td>
														</tr>
														<tr look={styles.tableTr}>
															<td look={styles.frontTd}>
																City:
															</td>
															<td look={styles.backTd}>
																<input key={'i5'} look={styles.textInput} type="text"></input>
															</td>
														</tr>
														<tr look={styles.tableTr}>
															<td look={styles.frontTd}>
																Country:
															</td>
															<td look={styles.backTd}>
																<input key={'i6'} look={styles.textInput} type="text"></input>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table look={styles.formTable}>
									<tbody>
										<tr look={styles.tableTr}>
											<td look={styles.frontTdHeadLine}>
												Address:
											</td>
											<td look={styles.backTd}>
												<hr look={styles.formHr}/>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Street:
											</td>
											<td look={styles.backTd}>
												<input key={'i7'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												City:
											</td>
											<td look={styles.backTd}>
												<input key={'i8'} look={styles.textInput} type="text"></input>
											</td>
										</tr>
										<tr look={styles.tableTr}>
											<td look={styles.frontTd}>
												Country:
											</td>
											<td look={styles.backTd}>
												<input key={'i9'} look={styles.textInput} type="text"></input>
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
