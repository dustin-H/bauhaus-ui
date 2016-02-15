import React, { PropTypes, Component } from 'react';
import Look, { StyleSheet } from 'react-look';
const c = StyleSheet.combineStyles;
import { $ } from '../../utils/i18n/index.js';

import _map from 'lodash/map';

var UNUSED_KEY = 'notUsedBauhausKeyWhichRepresentsUndefinded';

class InputSelect extends Component {
  handleChange(event) {
    const {bauhaus, get, set} = this.props;
    var value = event.target.value;
    if (value !== UNUSED_KEY) {
      set(bauhaus.props.path, value);
    }
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props;
    var valid = isValid(bauhaus.props.path);
    var inputStyle = [styles.textInput];
    if (valid !== true) {
      inputStyle.push(styles.inputError);
    }
    var value = get(bauhaus.props.path);
    if (value == undefined) {
      value = UNUSED_KEY;
    }
    return (
      <select className={ c(...inputStyle) } value={ value } onChange={ this
                                                                    .handleChange
                                                                    .bind(this) }>
        <option key={ UNUSED_KEY } value={ UNUSED_KEY } disabled={ true }>Please select!</option>
        { _map(bauhaus.props.options, function(value, key) {
            return <option key={ key } value={ key }>
                     { value }
                   </option>
          }) }
      </select>
      );
  }
}

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default Look(InputSelect);
