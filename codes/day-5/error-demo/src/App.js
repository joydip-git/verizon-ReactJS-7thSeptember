import React, { Component } from 'react';
import './App.css';
//import Hero from './Hero';
import NewHero, { TestComp } from './NewHero';
import ErrorBoundary from './ErrorBoundary';
/*
class Y extends Component {
  render() {
    return 'Hi';
  }
}
function X() {
  return React.createElement('p', null, 'X component');
}
*/
function App() {
  // let comp = new Y().render();
  // console.log(comp)
  return (
    <div className="App">
      {/* {X()}
      {TestComp()}
      <br />
      {comp}
      <br /> */}
      {/* <Hero heroName={'Batman'} />
      <Hero heroName={'Joker'} /> */}

      <NewHero heroName={'Batman'} />
      <ErrorBoundary>
        <NewHero heroName={'Joker'} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
