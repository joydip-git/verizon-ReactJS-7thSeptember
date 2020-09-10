import React, { Component, PureComponent } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        console.log('Child component created...')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Child getDerivedStateFromProps called')
        return null;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('Child shouldComponentUpdate called')
        if (this.props.value === newProps.value)
            return false;
        else
            return true;
    }
    getSnapshotBeforeUpdate(props, state) {
        console.log('Child getSnapshotBeforeUpdate called')
        return null;
    }
    componentDidUpdate(props, state, snapshot) {
        console.log('Child componentDidUpdate called')
    }
    componentDidMount() {
        console.log('Child got mounted in DOM');
    }
    componentWillUnmount() {
        console.log('Child destroyed')
    }
    componentDidCatch(error, info) {
        console.log('error happened in child')
    }
    render() {
        console.log('Child rendered')
        return (
            <div>
                Hi from child&nbsp;:{this.props.value.name}
                <br />
                <button onClick={this.props.valueChange}>Increase in Child</button>
            </div>
        )
    }
}
