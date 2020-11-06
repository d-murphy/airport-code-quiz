import React from 'react';
import './App.css';
import GameControl from './GameControls';
import ApCodeInput from './ApCodeInput';
import data from  './data.json'


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
    if (gameStatus === 'SelectPool') {
      return <GameControl updatePoolProp={props.updatePoolProp}
                          updateStageProp={props.updateStage} />;
    }

    const letterInput = props.letterInput;
    return (
      letterInput.map((letter, key) =>
        <ApCodeInput activeLetter={props.activeLetter} thisLetter={letter.letterNum}
                    saveAnswer = {props.saveAnswer} 
                    currentLetter = {letter.currentLetter} />
      )
    )}

const blankForm = [{letterNum: 0, currentLetter: ""},
                   {letterNum: 1, currentLetter: ""},
                   {letterNum: 2, currentLetter: ""}]

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      gameStatus: 'SelectPool', 
      gamePool: 'USTop50',
      questionNum: 0,
      letterEntry: 0,
      currentGame: currentGame,
      currentAnswers: [],
      letterInput: blankForm,
      currentAnswer: ""
    }; 
    this.updatePool = this.updatePool.bind(this);
    this.logState = this.logState.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
  }

  

  updatePool(event) {
    this.setState({gamePool: event.target.value, 
                   gameStatus: "gameStage"});
  }

  saveAnswer(event) {

    if(this.state.letterEntry <2 ) {
      
      const letterFormCtrl = this.state.letterInput.map((item, index) => 
                                                      {if(index===this.state.letterEntry){
                                                        return({letterNum: index, currentLetter: event.target.value})
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
      this.setState({
        letterEntry: 0,
        letterInput: blankForm,
        currentAnswers: [...this.state.currentAnswers, threeLetterAnswer]        
      }) 
    }      
  }

  logState(){
    console.log(this.state); 
  }


  render() {
    return(
    <div className="App">
      <h1>Do you know your Airport Codes?</h1>
      <div class="codeInput">
        <GameStage gameStatus={this.state.gameStatus} 
          updatePoolProp = {this.updatePool} 
          activeLetter = {this.state.letterEntry} 
          saveAnswer = {this.saveAnswer} 
          letterInput = {this.state.letterInput} />
      </div>
      <br/>
      <br/>
      <div onClick={this.logState}>Click to Log State</div>  
    </div>
    )
  }
}

export default App