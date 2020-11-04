import React from 'react';

class GameControl extends React.Component {
    render() {
      return (
        <div>
          <p>To start the game, first select which group of airports you want to use:</p>
          <form onSubmit={this.props.updatePoolProp}>
            <label>
              Which airports to test?:
              <select name="type" > 
                <option value="All">All</option>
                <option value="Top50Worldwide">Top 50 Worldwide</option>
                <option value="USOnly">US Only</option>
                <option value="Top50US">Top 50 US</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

      );
    }
  }

  export default GameControl; 