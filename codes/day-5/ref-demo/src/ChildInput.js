import React from 'react'

function ChildInput() {
    const inputRef = React.createRef();
    const focusHandler = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input type='text' ref={inputRef} id='txt1'/>
            <br />
            <button onClick={focusHandler}>Focus</button>
        </div>
    )
}

export default ChildInput
