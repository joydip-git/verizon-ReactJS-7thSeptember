import React, { Component } from 'react'
import DoubtChild from './DoubtChild'

export default class DoubtParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'from parent state'
        }
        this.doubtChildRef = React.createRef();
    }
    invokeChild = () => {
        let childData = this.doubtChildRef.current.sayHi();
        window.alert(childData);
    }
    invoke = (childData) => {
        window.alert('hello');
        window.alert(childData);
    }
    render() {
        return (
            <div>
                <DoubtChild ref={this.doubtChildRef} fn={this.invoke}
                    value={this.state.data}
                />
                <button onClick={this.invokeChild}>Invoke child</button>
            </div>
        )
    }
}
