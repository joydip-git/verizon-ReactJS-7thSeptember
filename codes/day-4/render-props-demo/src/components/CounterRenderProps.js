import React, { Component } from 'react'

export default class CounterRenderProps extends Component {
    state = {
        count: 0
    }
    increaseCounter = () => {
        this.setState(ps => {
            return {
                count: ps.count + 1
            }
        });
    }
    decreaseCounter = () => {
        this.setState(ps => {
            return {
                count: ps.count - 1
            }
        });
    }
    render() {
        return <>
            {this.props.render(this.state.count, this.increaseCounter, this.decreaseCounter)}
        </>
    }
}

