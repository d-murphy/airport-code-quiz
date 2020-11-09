import React from 'react';

class AnswerReview extends React.Component {
  render() {
//    var questions = this.props.questions
//    var currentAirport = questions[this.props.QuestionNum].AirportName


    var questions = this.props.questions
    var answers = this.props.currentAnswers

    var answerNum = []
    for(var i=0; i<10; i++){
        answerNum.push(i)
    }
    return(
        <div>
            <table>
            <tr>
              <th>Airport</th>
              <th>Airport Code</th>
              <th>Your Guess</th>
            </tr>
            {answerNum.map((answerNum) =>
              <tr>
                <td>{questions[answerNum].AirportName}</td>
                <td>{questions[answerNum].Code}</td>
                <td>{answers[answerNum]}</td>
              </tr>
            )}
            </table>

        </div>
    )
  }
}

export default AnswerReview