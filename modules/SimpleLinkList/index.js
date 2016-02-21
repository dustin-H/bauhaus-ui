import React, { PropTypes, Component } from 'react';
import Look, { StyleSheet } from 'react-look';
const c = StyleSheet.combineStyles;
import { $ } from 'bauhaus-ui-module-utils';
import _ from 'lodash';

class SimpleLinkList extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this
      .handleFilterChange
      .bind(this);
  }
  handleFilterChange(event) {
    const {bauhaus} = this.props;
    bauhaus._setState({
      filter: event.target.value
    });
  }
  componentWillMount() {
    const {bauhaus} = this.props;
    bauhaus._setState({
      filter: ''
    });
  }
  render() {
    const {bauhaus} = this.props

    return (
      <div>
        <span className={ styles.contentHeadline }>{ $(bauhaus.props.title) }</span>
        <hr className={ styles.contentHr } />
        <br/>
        <span>Filter: <input className={ styles.textInput } type="text" value={ bauhaus._state.filter } onChange={ this.handleFilterChange } /></span>
        <br/><br/>
        { _.map(bauhaus.props.list, function(value, key) {
            if (value.name.search(bauhaus._state.filter) >= 0) {
              return (<div key={key} className={styles.listElement}>
                        { $(value.name) }
                      </div>)
            } else {
              return ''
            }
          }) }
      </div>
    )
  }
}

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

__GLOBAL__.exportDefault = Look(SimpleLinkList);
