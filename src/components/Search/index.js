import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import look, {StyleSheet} from 'react-look';
import _ from 'lodash';
import SearchElement from '../SearchElement';
import {$} from '../../utils/i18n/index.js';

class Search extends Component {
	handleValueChange(event) {
		this
			.props
			.actions
			.search
			.changeValue(event.target.value);
	}
	componentWillReceiveProps (nextProps) {
		const {
			state
		} = this.props;
		if (nextProps.state.search.active === true && nextProps.state.search.active !== state.search.active) {
			var element = ReactDOM.findDOMNode(this.refs.searchInput);
			setTimeout(function() {
				element.select();
			}, 10);
		}
	}
	handleKeyDown (event) {
		if(event.keyCode === 27) {
			ReactDOM.findDOMNode(this.refs.searchInput).blur();
		}
	}
	render () {
		const {
			state,
			actions
		} = this.props;

		var content;

		if (state.search.results.length > 0 && state.search.loading === false) {
			content = _.map(state.search.results, function(value, key) {
				return (
					<SearchElement key={key} state={state} actions={actions} title={value.title} description={value.description} pathname={value.pathname}></SearchElement>
				)
			});
		} else {
			if (state.search.loading === true) {
				content = (
					<div look={styles.center}><br/><br/><img src="media/loader.gif"/></div>
				);
			} else {
				content = (
					<div look={styles.center}><br/><br/>Nothing found!</div>
				);
			}

		}

		return (
			<div look={styles.popup}>
				<input look={styles.input} ref="searchInput" onKeyDown={this
					.handleKeyDown
					.bind(this)} onBlur={actions.search.deactivate} value={state.search.value} onChange={this
					.handleValueChange
					.bind(this)}></input>
				<br/><br/>
				{content}
			</div>
		);
	}
}

Search.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Search, styleSheet);

export default look(Search);
