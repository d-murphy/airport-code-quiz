import React from 'react';

class GameControl extends React.Component {
    render() {
      return (
        <div class="gameControl">
          <p></p>
          <form onSubmit={this.props.updatePoolProp}>
            <button>Go !</button>
          </form>
        </div>

      );
    }
  }

  export default GameControl; 