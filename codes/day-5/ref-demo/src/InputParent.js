import React, { Component } from 'react'
import Input from './Input'

export default class InputParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }

    getComponentReference = () => {
        return this.componentRef;
    }
    // focusInput = () => {
    //     console.log(this.componentRef.current);
    //     this.componentRef.current.focusInputHandler();
    // }
    componentDidMount() {
        console.log(this.componentRef.current);
        //this.componentRef.current.focusInputHandler();
        this.componentRef.current.sayHi();
    }
    sayHello=()=>{
        window.alert('hello');
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} value={10} />
                {/* <Some refValue={this.componentRef.current} /> */}
                {/* <button onClick={this.focusInput}>Focus</button> */}
            </div>
        )
    }
}
