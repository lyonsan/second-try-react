import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  //マウント後にやりたい処理。ここではreadEventsを実行させること
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
        /*reducer内で定義したvalueを受け取るため、props.valueにする*/
        <React.Fragment>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.renderEvents()}
            </tbody>
          </table>
          {/* リンクさせる */}
          <Link to="events/new">New Event</Link>
        </React.Fragment>
        
    )
  }
}

// mapStateToPropsとmapDispatchToPropsはそれぞれ関数で、 = stateや = dispatchは引数を指定している。

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

