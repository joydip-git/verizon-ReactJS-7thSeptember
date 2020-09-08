import React from 'react'

//functional components
function onClickChange() {
    alert('Hi');
}
function Welcome() {
    const style = {
        fontFamily: 'Arial',
        backgroundColor: 'grey'
    }

    return (
        <div id='d2'>
            <span id='sp1' style={style}>Hello guys</span>
            <button id='changeBtn' onClick={onClickChange}>Click</button>
        </div>
    );
}

export default Welcome;

