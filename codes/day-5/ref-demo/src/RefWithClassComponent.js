import React, { Component } from 'react';

class RefWithClassComponent extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.state = {
      errorMessage: ''
    }
  }
  componentDidMount() {
    console.log('mounted')
    this.inputRef.current.focus();
  }
  validationHandler = (event) => {
    event.preventDefault();
    console.log('called')
    console.log(this.inputRef.current.value === '')
    if (this.inputRef.current.value === '') {
      this.setState({
        errorMessage: 'can not be empty'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <form>
          <input type='text' ref={this.inputRef} />
          <br />
          <button onClick={this.validationHandler}>Submit</button>
          {
            this.state.errorMessage !== '' && <div>{this.state.errorMessage}</div>
          }
        </form>
      </div>
    );
  }
}

export default RefWithClassComponent;
