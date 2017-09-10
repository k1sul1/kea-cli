import './styles.scss'

// libraries
import React, { Component } from 'react'
import { connect } from 'kea'

// utils

// components

// logic
import $$camelScene$$ from '~/scenes/$$dash-scene$$/logic'
import sceneSaga from '~/scenes/$$dash-scene$$/saga'

// const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = $$camelScene$$.constants

@connect({
  actions: [
    $$camelScene$$, [
      // 'showAll',
      // 'setVisibilityFilter'
    ]
  ],
  props: [
    $$camelScene$$, [
      // 'visibilityFilter'
    ]
  ],
  sagas: [
    sceneSaga
  ]
})
export default class $$CapitalScene$$Scene extends Component {
  render () {
    // const { visibilityFilter } = this.props
    // const { showAll, setVisibilityFilter } = this.props.actions

    return (
      <div className='$$dash-scene$$-scene'>
      </div>
    )
  }
}
