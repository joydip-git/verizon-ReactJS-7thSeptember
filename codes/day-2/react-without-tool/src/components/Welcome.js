import React from 'react'

export function Welcome() {
    const spanReactElement = React.createElement('span', { id: 'sp1', style: 'font-family:Arial' }, 'Hello guys');

    const buttonReactElement = React.createElement('button', { id: 'changeBtn', value: 'Click', onClick=() => alert('Hi') });

    const divReactElement = React.createElement('div', { id: 'd2' }, spanReactElement, buttonReactElement)

    return divReactElement;
}

