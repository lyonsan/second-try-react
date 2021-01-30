import React, { Component } from 'react'


//関数コンポーネント
const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count:0 }
  }
//メソッド
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
//メソッド
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
