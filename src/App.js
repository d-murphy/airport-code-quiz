import React from 'react';
import './App.css';
import GameControl from './GameControls';
import ApCodeInput from './ApCodeInput';
import data from  './data.json';
import AirportName from './AiportName';
import CorrectTotal from './CorrectTotal.js'
import AnswerReview from './AnswerReview.js'


var dataPositionsToInclude = [];
var checkIfDup; 

while(dataPositionsToInclude.length<10){
  checkIfDup = Math.floor(Math.random() * data.length)
  if(! dataPositionsToInclude.includes(checkIfDup)){
    dataPositionsToInclude.push(checkIfDup)
  }
}

var currentGame = [];

for(var i = 0; i<10; i++){
  currentGame.push(data[dataPositionsToInclude[i]])
}

  function GameStage(props) {
    const gameStatus = props.gameStatus;
    if (gameStatus === 'WaitForStart') {
      return <GameControl updatePoolProp={props.updatePoolProp}
                          updateStageProp={props.updateStage} />;
    } else if (gameStatus === 'gameStage') {
      const letterInput = props.letterInput;
      return (
        <div>
        <AirportName questions={props.questions} QuestionNum={props.questionNum}/>   
          <div class="codeInput">  
            {letterInput.map((letter, key) =>
              <ApCodeInput activeLetter={props.activeLetter} thisLetter={letter.letterNum}
                          saveAnswer = {props.saveAnswer} 
                          currentLetter = {letter.currentLetter} 
              />
            )}
          </div>
          <div class="correctTotal">
            <CorrectTotal correctAnswers = {props.correctAnswers}
                            questionNum = {props.questionNum} />
          </div>

        </div>
      )
    } else {
      return (
      <div>
        <p>Quiz complete!</p>
        <div class="correctTotal">
          <CorrectTotal correctAnswers = {props.correctAnswers}
                            questionNum = {props.questionNum} />
        </div>
        <div class="answerTable">
          <AnswerReview questions = {props.questions} 
                        currentAnswers = {props.currentAnswers} />
        </div>
      </div>
      )
    }

}

const blankForm = [{letterNum: 0, currentLetter: ""},
                   {letterNum: 1, currentLetter: ""},
                   {letterNum: 2, currentLetter: ""}]

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      gameStatus: 'WaitForStart', 
      gamePool: 'USTop50',
      questionNum: 0,
      letterEntry: 0,
      currentGame: currentGame,
      currentAnswers: [],
      letterInput: blankForm,
      currentAnswer: "",
      correctAnswers: 0
    }; 
    this.updatePool = this.updatePool.bind(this);
    this.logState = this.logState.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
  }

  

  updatePool(event) {
    this.setState({gameStatus: "gameStage"});
  }

  saveAnswer(event) {

    if(this.state.letterEntry <2 ) {
      
      const letterFormCtrl = this.state.letterInput.map((item, index) => 
                                                      {if(index===this.state.letterEntry){
                                                        return({letterNum: index, 
                                                                currentLetter: event.target.value.toUpperCase()})
                                                      } else {
                                                        return(item)
                                                      }
                                                    })                                
      this.setState({
        letterEntry: this.state.letterEntry + 1,
        letterInput: letterFormCtrl,
      }) 
    } else {
      var ansArr = this.state.letterInput.map((item, index) => item.currentLetter)
      var threeLetterAnswer = ansArr[0] + ansArr[1] + event.target.value.toUpperCase()
      var answerCorrect = this.state.currentGame[this.state.questionNum].Code === threeLetterAnswer ? 1 : 0; 
      var gameStage = this.state.questionNum < 9 ? 'gameStage' : 'gameOver'
      this.setState({
        letterEntry: 0,
        letterInput: blankForm,
        currentAnswers: [...this.state.currentAnswers, threeLetterAnswer], 
        questionNum: this.state.questionNum + 1, 
        correctAnswers: this.state.correctAnswers + answerCorrect, 
        gameStatus: gameStage
      }) 
    }      
  }

  logState(){
    console.log(this.state); 
  }


  render() {
    return(
    <div className="App">
      <h1>Airport Code Quiz</h1>
      <div class="codeInput">
        <GameStage gameStatus={this.state.gameStatus} 
          updatePoolProp = {this.updatePool} 
          activeLetter = {this.state.letterEntry} 
          saveAnswer = {this.saveAnswer} 
          letterInput = {this.state.letterInput} 
          questions = {this.state.currentGame}
          questionNum = {this.state.questionNum}
          correctAnswers = {this.state.correctAnswers}
          currentAnswers = {this.state.currentAnswers}
           />
      </div>
{/*   
      <br/>
      <br/>
      <div class="LogStateBut" onClick={this.logState}>Log State</div>
*/}  
    </div>
    )
  }
}

export default App