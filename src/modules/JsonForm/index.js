import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _ from 'lodash';
import objectPath from 'object-path';
import superagent from 'superagent';
import superagentPlugin from '../../utils/helpers/superagentPlugin.js';

class JsonForm extends Component {
	constructor() {
		super();
		this.state = {
			savedData: {},
			data: {},
			loading: false,
			initialLoaded: false,
			changed: false,
			error: false
		}
	}
	getValue(path) {
		return objectPath.get(this.state.data, path);
	}
	setValue(path, value) {
		var state = Object.assign({}, this.state);
		if (state.initialLoaded === true && state.loading === false) {
			var data = state.data;
			objectPath.set(data, path, value);
			state.data = data;
			state.changed = JSON.stringify(state.data) === JSON.stringify(state.savedData);
		}
		this.setState(state);
	}
	componentDidMount() {
		this.state.loading = true;
		this.setState(this.state);
		superagent
			.get(this.props.bauhaus.props.getUrl)
			.accept('json')
			.use(superagentPlugin())
			.end((function(err, res) {
				if (err != null || res == null || res.body == null || res.body.jsondata == null) {
					this.state.error = true;
					return this.setState(this.state);
				}
				this.state.data = res.body.jsondata;
				this.state.savedData = res.body.jsondata;
				this.state.initialLoaded = true;
				this.state.loading = false;
				this.setState(this.state);
			}).bind(this));
	}
	render() {
		const {bauhaus} = this.props;
		if (this.state.error === true) {
			return (
				<div look={styles.center}><br/>{$('$core.content.error')}</div>
			);
		}
		if (this.state.loading === true || this.state.initialLoaded === false) {
			return (
				<div look={styles.center}><br/><img src="media/loader.gif"/></div>
			);
		}
      var saveColor = styles.gray;
      if(this.state.changed === true){
         saveColor = styles.green;
      }
		return (
			<div>
				<span look={styles.contentHeadline}>{bauhaus.props.title}</span><hr look={styles.contentHr}/>
				<input look={[styles.button, saveColor]} type="button" value="Speichern" key="b1"/>
            <input look={[styles.button, styles.gray]} type="button" value="Zurücksetzen" key="b2"/>
            <input look={[styles.button, styles.gray, styles.hoverRed]} type="button" value="Löschen" key="b3"/>
				<br/><br/>
				{_
					.map(bauhaus._childrenGenerators, function(component, key) {
						return component({
							get: this
								.getValue
								.bind(this),
							set: this
								.setValue
								.bind(this),
							key: key,
						})
					}.bind(this))}
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(JsonForm, styleSheet);

export default Look(JsonForm);
