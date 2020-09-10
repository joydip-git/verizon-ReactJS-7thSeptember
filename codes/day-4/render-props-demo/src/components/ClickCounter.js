import React from 'react'
import PropTypes from 'prop-types'

function ClickCounter({ counterValue, increaseFunction, decreaseFunction }) {
    return (
        <div>
            Click Counter Value:<span>{counterValue}</span>
            <br />
            <button onClick={increaseFunction}>Increase</button>
            <br />
            <button onClick={decreaseFunction}>Decrease</button>
        </div>
    )
}
ClickCounter.propTypes = {
    counterValue: PropTypes.string.isRequired,
    increaseFunction: PropTypes.func.isRequired,
    decreaseFunction: PropTypes.func.isRequired
}
export default ClickCounter;
