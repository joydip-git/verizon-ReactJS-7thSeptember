import React from 'react';
import './App.css';
import CounterRenderProps from '../components/CounterRenderProps';
import ClickCounter from '../components/ClickCounter';
import HoverCounter from '../components/HoverCounter';

function App() {
  return (
    <div className="App">

      <CounterRenderProps
        render={(countValue, increaseFn, decreaseFn) =>
          <ClickCounter counterValue={countValue} increaseFunction={increaseFn} decreaseFunction={decreaseFn} />} />
      <br /><br />
      <CounterRenderProps
        render={(countValue, increaseFn, decreaseFn) =>
          <HoverCounter counterValue={countValue} increaseFunction={increaseFn} decreaseFunction={decreaseFn} />} />
    </div>
  );
}

export default App;
