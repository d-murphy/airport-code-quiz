import React from 'react';

class GameControl extends React.Component {
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
          <label>
            Which airports to test?:
            <select name="type" value={this.state.value} onChange={this.handleChange}>
              <option value="All">All</option>
              <option value="Top50Worldwide">Top 50 Worldwide</option>
              <option value="USOnly">US Only</option>
              <option value="Top50US">Top 50 US</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

      );
    }
  }

  export default GameControl; 