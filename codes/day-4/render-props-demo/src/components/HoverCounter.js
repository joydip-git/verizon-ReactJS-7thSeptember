import React from 'react'
import PropTypes from 'prop-types'

function HoverCounter({ counterValue, increaseFunction, decreaseFunction }) {
    return (
        <div>
            Hover Counter Value:<span>{counterValue}</span>
            <br />
            <div style={{ backgroundColor: "lime" }} onMouseOver={increaseFunction}>Increase</div>
            <br />
            <div style={{ backgroundColor: "aqua" }} onMouseOver={decreaseFunction}>Decrease</div>
        </div>
    )
}
HoverCounter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    increaseFunction: PropTypes.func.isRequired,
    decreaseFunction: PropTypes.func.isRequired
}
export default HoverCounter;
