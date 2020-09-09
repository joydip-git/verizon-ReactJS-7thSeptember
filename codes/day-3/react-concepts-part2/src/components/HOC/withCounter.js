import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 10
            }
        }
        increaseCounter = () => {
            this.setState(ps => {
                return {
                    count: ps.count + 1
                }
            })
        }
        decreaseCounter = () => {
            this.setState(ps => {
                return {
                    count: ps.count - 1
                }
            })
        }
        render() {
            return <WrappedComponent
                {...this.props}
                countValue={this.state.count}
                increaseCounterValue={this.increaseCounter}
                decreaseCounterValue={this.decreaseCounter} />
        }
    }
    return WithCounter;
};
export default withCounter;