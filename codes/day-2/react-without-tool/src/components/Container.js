import React from 'react'
import { Welcome } from './Welcome'

function Container() {
    const welcomeReactElement = Welcome();
    const inputReactElement = React.createElement('input', { type: 'text' });
    const divReactElement = React.createElement('div', { id: 'd1' },
        welcomeReactElement, inputReactElement);
        
    return divReactElement;
}

export default Container;
//module.exports = Welcome;