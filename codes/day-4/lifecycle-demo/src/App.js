import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import AnotherChild from './AnotherChild';

//restful HTTP call, connecting to underslying socket etc.: causes side-effect
class App extends Component {

  state = {
    count: 0,
    value: 0,
    data: 0,
    productId: 0,
    show: true
  }

  changeData = () => {
    this.setState(ps => {
      return {
        data: ps.data + 1,
      }
    })
  }

  increaseCount = () => {
    this.setState(ps => {
      return {
        count: ps.count + 1,
      }
    })
  }
  increaseValue = () => {
    // let oldValue = { ...this.state.value };
    // oldValue.name = 'anil';
    // this.setState(ps => {
    //   return {
    //     value: oldValue
    //   }
    // });
    this.setState(ps => {
      return {
        value: ps.value + 1
      }
    })
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
        <button onClick={() => this.setState(ps => { return { show: !ps.show } })}>
          Show child????
        </button>
        <br />
        {
          this.state.show ? (<Child pid={this.state.productId} value={this.state.value} valueChange={this.increaseValue} />) : 'child gone'
        }
        <br />
        <AnotherChild data={this.state.data} />
        <br />
        <button onClick={this.changeData}>ChangeData</button>
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
