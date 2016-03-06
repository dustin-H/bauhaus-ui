import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Loader from '../Loader'
import Router from '../Router'

const bauhaus = {
  name: 'SimpleWrapper',
  components: [
    {
      name: 'InputText',
      props: {
        defaultValue: '$core.auth.login.username',
        label: '$core.auth.login.submit'
      }
    }
  ]
}

class Content extends Component {
  render() {
    const {state, actions} = this.props
    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <div className={ styles.contentCenter }>
            <div className={ styles.stretcher }>
              <div className={ styles.stretcherInside }></div>
              <div className={ styles.stretcherInside }></div>
              <div className={ styles.stretcherInside }></div>
              <div className={ styles.stretcherInside }></div>
            </div>
            <Router state={ state } actions={ actions }></Router>
          </div>
        </div>
      </div>
    )
  }
}

/*
<div className={styles.footer}>
	<div className={styles.footerLanguage}></div>
</div>
*/

Content.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(Content)
