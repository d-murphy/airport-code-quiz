import React from 'react';

class CorrectTotal extends React.Component {
  render() {
    return(
        <div>
            {this.props.correctAnswers} of {this.props.questionNum} Airports correct
        </div>
    )
  }
}

export default CorrectTotal