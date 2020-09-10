import React, { Component } from 'react';
import './App.css';
import Child from './Child';

//restful HTTP call, connecting to underslying socket etc.: causes side-effect
class App extends Component {

  state = {
    count: 0,
    value: {
      name: 'joy'
    }
  }

  increaseCount = () => {
    let oldValue = { ...this.state.value };
    this.setState(ps => {
      return {
        count: ps.count + 1,
        value: oldValue
      }
    })
  }
  increaseValue = () => {
    let oldValue = { ...this.state.value };
    oldValue.name = 'anil';
    this.setState(ps => {
      return {
        value: oldValue
      }
    });
  }
  constructor(props) {
    super(props);
    console.log('App component created...')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App getDerivedStateFromProps called')
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('App shouldComponentUpdate called')
    return true;
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log('App getSnapshotBeforeUpdate called')
    return null;
  }
  componentDidUpdate(props, state, snapshot) {
    console.log('App componentDidUpdate called')
  }
  render() {
    console.log('App rendered')
    return (
      <div className="App">
        Hi from App&nbsp;{this.state.count}
        <br />
        <button onClick={this.increaseCount}>Increase</button>
        <br />
        <Child value={this.state.value} valueChange={this.increaseValue} />
      </div>
    );
  }
  componentDidMount() {
    //code to get data from server 
    //you will put that data in the state object
    // in order to do that you will call setState()
    //setState method will update the state asynchronously 
    //and after that it will call render method once again 
    console.log('App got mounted in DOM');
  }
  componentWillUnmount() {
    console.log('App destroyed')
  }
  componentDidCatch(error, info) {
    console.log('error happened in parent')
  }
}

export default App;
