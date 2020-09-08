import React from 'react'

export function Welcome() {
    // const spanReactElement = React.createElement('span', { id: 'sp1', style: 'font-family:Arial' }, 'Hello guys');
    //pseudo-HTML
    const style = {
        fontFamily: 'Arial',
        backgroundColor: 'grey'
    }
    // const spanReactElement = <span id='sp1' style={style}>Hello guys</span>;

    // const buttonReactElement = React.createElement('button', { id: 'changeBtn', value: 'Click', onClick=() => alert('Hi') });
    //const buttonReactElement = <button id='changeBtn'>Click</button>

    // const divReactElement = React.createElement('div', { id: 'd2' }, spanReactElement, buttonReactElement)
    const divReactElement = (
        <div id='d2'>
            <span id='sp1' style={style}>Hello guys</span>
            <button id='changeBtn' click={() => alert('Hi')}>Click</button>
        </div>
    );

    return divReactElement;
}


