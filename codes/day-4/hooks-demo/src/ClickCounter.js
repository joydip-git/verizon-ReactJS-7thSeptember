import React from 'react'
import withCounter from './withCounterwithHook'

const data = 200;
function ClickCounter({ increaseCount, count, value, addValue }) {
    return (
        <div>
            Count:&nbsp;<span>{count}</span>
            <br />
            Value:&nbsp;<span>{value}</span>
            <br />
            AdditionalValue:&nbsp;<span>{addValue}</span>
            <br />
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default withCounter(ClickCounter, data);
