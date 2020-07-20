// @flow
import React from 'react'
import { connect } from 'react-redux'

import TestComponent from '../components/TestComponent'

type HomepageContainerProps = {}

class HomepageContainer extends React.Component<HomepageContainerProps> {
  render() {
    return (
      <div>
        <h1>DevX starterpack</h1>
        <TestComponent text="aaa" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(HomepageContainer)
