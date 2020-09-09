import React from 'react'
//import PropTypes from 'prop-types'
import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { countValue, increaseCounterValue, decreaseCounterValue, data } = props;
    return (
        <>
            Own Property: <span>{data}</span>
            <br />
            HOC Injected Property:<span>{countValue}</span>
            <br />
            <button onClick={decreaseCounterValue}>DecreaseValue</button>
        </>
    )
}

// ClickCounter.propTypes = {
//     count: PropTypes.number.isRequired,
//     changeCounter: PropTypes.func.isRequired
// }

export default withCounter(ClickCounter);
