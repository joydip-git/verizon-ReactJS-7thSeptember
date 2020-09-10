import React from 'react'

const testFn = () => {
    return 20;
}
function CounterRenderProps(props) {
    return (
        <div>
            {props.render('Joy', testFn)}
        </div>
    )
}

export default CounterRenderProps
