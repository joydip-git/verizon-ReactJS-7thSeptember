import React, { Component } from 'react'

export default class DoubtChild extends Component {
    state = {
        childValue: 'child state value'
    }
    sayHi = () => {
        window.alert('Hi');
        return this.state.childValue;
    }

    render() {
        return (
            <div>
                <span>{this.props.value}</span>
                <button onClick={() => this.props.fn(this.state.childValue)}>Invoke Parent from child</button>
            </div>
        )
    }
}
