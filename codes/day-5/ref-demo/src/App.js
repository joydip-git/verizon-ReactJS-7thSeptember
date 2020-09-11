import React, { Component } from 'react';
import './App.css';
import RefWithClassComponent from './RefWithClassComponent';
import ChildInput from './ChildInput';
import InputParent from './InputParent';
import DoubtParent from './DoubtParent';

class App extends Component {
  constructor(props) {
    super(props)
    this.parentRef = React.createRef();
  }
  componentDidMount() {
    console.log('called from App')
    //console.log(this.parentRef.current.componentRef());
  }
  render() {
    return (
      <div className="App">
        {/* <RefWithClassComponent />
        <br />
        <ChildInput /> */}
        {/* <InputParent ref={this.parentRef} />
        <br />
        <button
          onClick=
          {
            () =>
              this.parentRef.current.getComponentReference().current.focusInputHandler()
          }
        >Check</button> */}
        <DoubtParent />
      </div>
    );
  }
}

export default App;
