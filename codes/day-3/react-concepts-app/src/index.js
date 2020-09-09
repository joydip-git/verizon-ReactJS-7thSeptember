import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

//const ele = ProductEdit();
//const comp = new App();
/**
 * {
 *  state={
 *  
 *  }
 * }
 */
//const ele1 = comp.render();
/**
 * {
 *   type:'div',
 *   props:{
 *    children: [ProductEdit]
 *   }
 * }
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
