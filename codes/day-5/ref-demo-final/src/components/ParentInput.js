import React, { Component } from 'react'
import Input from './Input';

export default class ParentInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} value={20} />
                <br />
                <button
                    onClick={() => this.componentRef.current.focus()}>
                    Click
                </button>
            </div>
        )
    }
}
