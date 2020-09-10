import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import withCounter from './withCounterwithHook';

function App(props) {
  const [valueState, setValueState] = useState({ value: 10 });
  const [countState, setCountState] = useState({ count: 20 });

  useEffect(() => {
    console.log('called...')
    return () => {
      console.log('for clean up')
    }
  })

  //useReducer()


  const changeValue = () => {
    // let newValue = value + 1;
    // setValue(newValue);
    //let { value } = { ...appState };
    // setAppState({
    //   ...appState,
    //   value: 10
    // });
    // setValueState({
    //   value: 30
    // });
    setValueState((ps) => {
      return {
        ...ps,
        value: ps.value + 1
      }
    });
    setCountState({
      ...countState,
      count: 40
    })
  }

  // const ClicCounterWithCount = withCounter(ClickCounter);
  return (
    <div className="App">
      {/* Value:&nbsp;<span>{valueState.value}</span>
      <br />
      Count:&nbsp;<span>{countState.count}</span>
      <br />
      <button onClick={changeValue}>Change</button> */}
      <ClickCounter value={'not injected via HOC, but was passed directly'} />
      {

      }
    </div>
  );
}

export default App;
/**
 * function useState(state){
 *  this.obj = state; {value:0, count:20}
 *  this.setObj=(newState)=>{
 *    this.obj = newState; {value:10}
 *  }
 *  return this;
 * }
 *
 */