import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    sayHi = () => {
        window.alert('Hi')
    }
    focusInputHandler = () => {
        console.log(this.inputRef.current);
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}
