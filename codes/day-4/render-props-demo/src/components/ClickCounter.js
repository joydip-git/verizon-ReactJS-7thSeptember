import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClickCounter extends Component {
    render() {
        const { counterValue, increaseFunction, decreaseFunction } = this.props;
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
}
ClickCounter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    increaseFunction: PropTypes.func.isRequired,
    decreaseFunction: PropTypes.func.isRequired
}
export default ClickCounter;
