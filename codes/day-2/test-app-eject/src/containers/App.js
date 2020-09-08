import React from 'react';
import './App.css';
import Person from '../components/Person';

const personData = {
  name: 'joydip',
  age: 20
};
function App() {
  return (
    <div className="App">
      <Person person={personData} x={20} />
    </div>
  );
}

export default App;

/**
 *
 */

