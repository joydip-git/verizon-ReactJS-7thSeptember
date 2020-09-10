import React from 'react'
import PropTypes from 'prop-types'

function ClickCounter({ nameValue, invoke }) {
    return (
        <div>
            {nameValue}
            <span>{invoke()}</span>
        </div>
    )
}
ClickCounter.propTypes = {
    nameValue: PropTypes.string.isRequired,
    invoke: PropTypes.func.isRequired
}
export default ClickCounter
