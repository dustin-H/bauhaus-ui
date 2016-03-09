import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $, mobile } from 'bauhaus-ui-module-utils'
import Date from './Date'
import Time from './Time'
import styles from './style.js'
import moment from 'moment'

class InputDateTime extends Component {
  constructor(props) {
    super(props)
    const {bauhaus, get} = props
    this.state = {
      value: get(bauhaus.props.path)
    }
    this.timeout = null
  }
  handleDateChange(value) {
    const {bauhaus, get, set} = this.props
    try {
      var old = moment(get(bauhaus.props.path))
      var mom = moment(value)
      old.date(mom.date())
      old.month(mom.month())
      old.year(mom.year())
      set(bauhaus.props.path, old.toISOString())
    } catch ( e ) {
      throw e
    }
  }
  handleTimeChange(value) {
    const {bauhaus, get, set} = this.props
    try {
      var mom = moment(value)
      set(bauhaus.props.path, mom.toISOString())
    } catch ( e ) {
      throw e
    }
  }
  componentWillReceiveProps(nextProps) {
    const {bauhaus, get} = nextProps
    this.setState({
      value: get(bauhaus.props.path)
    })
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props
    var valid = isValid(bauhaus.props.path)
    var value = get(bauhaus.props.path)
    if (value != null && value !== '') {
      try {
        value = moment(value).toDate()
      } catch ( e ) {
        throw e
      }
    }
    var compDate = <div className={ styles.innerBox }>
                     <Date hint={ $('$core.commons.date') } valid={ valid } value={ value } onChange={ this.handleDateChange.bind(this) } />
                   </div>
    var compTime = <div className={ styles.innerBox }>
                     <Time hint={ $('$core.commons.time') } valid={ valid } value={ value } onChange={ this.handleTimeChange.bind(this) } />
                   </div>

    if (bauhaus.props.dateOnly === true) {
      return (
        <div className={ styles.box }>
          { compDate }
        </div>
      )
    }

    if (bauhaus.props.timeOnly === true) {
      return (
        <div className={ styles.box }>
          { compTime }
        </div>
      )
    }

    return (
      <div className={ styles.box }>
        { compDate }
        <div className={ styles.spaceBox }>
        </div>
        { compTime }
      </div>
    )
  }
}

export default Look(InputDateTime)
