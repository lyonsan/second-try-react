import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// mapStateToPropsとmapDispatchToPropsはそれぞれ関数で、 = stateや = dispatchは引数を指定している。

//const mapDispatchToProps = ({ readEvents })

export default connect(null, null)(EventsNew)

