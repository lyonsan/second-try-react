import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        {/*reducer内で定義したvalueを受け取るため、props.valueにする*/}
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// mapStateToPropsとmapDispatchToPropsはそれぞれ関数で、 = stateや = dispatchは引数を指定している。

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)

