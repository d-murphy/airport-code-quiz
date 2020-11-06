import React from 'react';

class AirportName extends React.Component {
  render() {
    var questions = this.props.questions
    var currentAirport = questions[this.props.QuestionNum].AirportName
    return(
        <div>
            {currentAirport}
        </div>
    )
  }
}

export default AirportName