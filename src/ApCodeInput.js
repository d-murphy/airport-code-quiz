import React from 'react';

class ApCodeInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} disabled/>
        </form>

      );
    }
  }

  export default ApCodeInput; 