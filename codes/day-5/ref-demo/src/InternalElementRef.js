import React, { Component } from 'react'

export default class InternalElementRef extends Component {
    elementRef = React.createRef();
    componentRef = React.createRef();
    componentRef2 = React.createRef();
    sayHello = (data) => {
        window.alert('hello from parent');
        window.alert(data)
    }
    componentDidMount() {
        this.elementRef.current.focus();
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.elementRef} />
                <InternalChild ref={this.componentRef} value={20} callback={this.sayHello} />
                <button onClick={() => this.componentRef.current.sayHi()}>Call Child Function</button>
                <InternalElementRefFunction ref={this.componentRef2} />
            </div>
        )
    }
}
export class InternalChild extends Component {
    sayHi = () => {
        window.alert('hello from child');
    }
    render() {
        return
        <>
            <button onClick={() => this.props.callback('data from child')}></button>
            internal child
            {this.props.value}
        </>;
    }
}
export function InternalElementRefFunction() {
    const elementRef = React.createRef();
    const saySomething = () => {

    }
    return (
        <div>
            <input type='text' ref={this.elementRef} />
        </div>
    )
}
