import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.log('did catch error')
        console.log(error)
        console.log(info)
        // this.setState({
        //     hasError: true
        // })
    }
    render() {
        console.log('rendered')
        if (this.state.hasError) {
            return <div>something went wrong</div>
        }
        return this.props.children;
    }
}
