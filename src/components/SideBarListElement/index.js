import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class SideBarListElement extends Component {
	handleClick(e) {
		const {actions, pathname} = this.props;
		actions
			.router
			.pushLocation({pathname: pathname});
	}
	render () {
		const {
			label,
			imageUrl
		} = this.props;
		return (
			<div look={styles.sideBarListElement} onClick={this.handleClick.bind(this)}>
				<span look={styles.menuIcon}>
					<img src={imageUrl} look={styles.imageIcon}/>
				</span>
				<span>{$(label)}</span>
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(SideBarListElement, styleSheet);

export default look(SideBarListElement);
