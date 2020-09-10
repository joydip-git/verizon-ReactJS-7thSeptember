import React, { Component, PureComponent } from 'react'

/**
 * Component.prototype.state={
 *
 * }
 */
export default class Child extends Component {
    constructor(props) {
        super(props);
        console.log('Child component created...')
        this.state = {
            xValue: 0,
            product: {}
        }
    }

    //rarely used
    //state is must be used
    //DO NOT WRITE ANY SIDE-EFFECT CAUSING CODE HERE
    static getDerivedStateFromProps(props, state) {
        console.log(`xValue old: ${state.xValue}`)
        let oldXValue = state.xValue;
        oldXValue = props.value + 1;

        console.log('Child getDerivedStateFromProps called')
        return {
            xValue: oldXValue
        };
    }

    //DO NOT WRITE ANY SIDE-EFFECT CAUSING CODE HERE
    shouldComponentUpdate(newProps, newState) {
        console.log(`Child shouldComponentUpdate called: ${this.state.xValue}`)
        if (this.props.value === newProps.value)
            return false;
        else
            return true;
    }

    //rarely used
    //DO NOT WRITE ANY SIDE-EFFECT CAUSING CODE HERE
    getSnapshotBeforeUpdate(props, state) {
        console.log('Child getSnapshotBeforeUpdate called')
        return {
            x: 120,
            y: 230
        };
    }

    //WRITE ANY SIDE-EFFECT CAUSING CODE HERE
    componentDidUpdate(oldElementProps, state, scrollPosition) {
        console.log(scrollPosition)
        if (oldElementProps.value !== this.props.value) {
            //code to get data from server 
            //you will put that data in the state object
            // in order to do that you will call setState()
            //setState method will update the state asynchronously 
            //and after that it will call render method once again 
            // }
        }
        console.log('Child componentDidUpdate called');
        console.log(oldElementProps)
    }

    //WRITE ANY SIDE-EFFECT CAUSING CODE HERE
    componentDidMount() {
        console.log('Child got mounted in DOM');
    }
    //this is the place to clear up any (global) resources
    componentWillUnmount() {
        console.log('Child destroyed')
    }
    componentDidCatch(error, info) {
        console.log('error happened in child')
    }

    //DO NOT WRITE ANY SIDE-EFFECT CAUSING CODE HERE
    render() {
        console.log('Child rendered: ' + this.state.xValue)
        return (
            <div>
                Hi from child&nbsp;:{this.props.value}
                <br />
                <button onClick={this.props.valueChange}>Increase in Child</button>
            </div>
        )
    }

    //do not use these lifecyle hooks
    // UNSAFE_componentWillMount() {

    // }
    // componentWillReceiveProps() {

    // }
    // componentWillUpdate() {

    // }
}
