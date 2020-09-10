import React from 'react';
import './App.css';
import CounterRenderProps from '../components/CounterRenderProps';
import ClickCounter from '../components/ClickCounter';

const getName = (name, callback) => {
  return <ClickCounter nameValue={name} invoke={callback} />
}

function App() {
  return (
    <div className="App">
      <CounterRenderProps render={getName} />
    </div>
  );
}

export default App;
