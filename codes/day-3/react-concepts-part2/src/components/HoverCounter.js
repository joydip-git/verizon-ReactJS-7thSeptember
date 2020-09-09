import React, { Component } from 'react'
import withCounter from './HOC/withCounter';
//import PropTypes from 'prop-types'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            someValue: 107
            //count:19
        }
    }
    //don't try to change a key n the state which wil be in-future injected in this component (as element)
    changeC = () => {
        this.setState((ps, receivedProps) => {
            return {
                someValue: receivedProps.countValue + ps.someValue
            };
        }, () => console.log(this.state.someValue));
    }
    render() {

        const { countValue, increaseCounterValue, decreaseCounterValue, value } = this.props;
        return (
            <div>
                <button onClick={this.changeC}>Test</button>
                <br />
                Own State Value: <span>{this.state.someValue}</span>
                <br />
                Own Property: <span>{value}</span>
                <br />
                HOC Injected Property:<span>{countValue}</span>
                <br />
                <div onMouseOver={increaseCounterValue}>IncreaseValue</div>
            </div>
        )
    }
}
// HoverCounter.propTypes = {
//     count: PropTypes.number.isRequired,
//     changeCounter: PropTypes.func.isRequired
// }
export default withCounter(HoverCounter)
