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

console.log(currentGame)




function GameStage(props) {
  const gameStatus = props.gameStatus;
  if (gameStatus === 'SelectPool') {
    return <GameControl updatePoolProp={props.updatePoolProp}
                        updateStageProp={props.updateStage} />;
  }
  return (<div class="codeInput">
            <ApCodeInput activeLetter={props.activeLetter} thisLetter={1} 
                         saveAnswer = {props.saveAnswer}/>
            <ApCodeInput activeLetter={props.activeLetter} thisLetter={2} saveAnswer = {props.saveAnswer}
            />
            <ApCodeInput activeLetter={props.activeLetter} thisLetter={3} saveAnswer = {props.saveAnswer}
             />
          </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      gameStatus: 'SelectPool', 
      gamePool: 'USTop50',
      questionNum: 0,
      letterEntry: 1,
      currentGame: currentGame,
      currentAnswers: [],
      currentAnswer: "",
      currentLetters: ["","",""]
    }; 
    this.updatePool = this.updatePool.bind(this);
    this.logState = this.logState.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
//    this.letterChange = this.letterChange.bind(this);
  }

  updatePool(event) {
    this.setState({gamePool: event.target.value, 
                   gameStatus: "gameStage"});
  }

  saveAnswer(event) {

    if(this.state.letterEntry === 1 ) {
      
      const letterFormCtrl = this.state.currentLetters.map((item, index) => 
                                                      {if(index===0){
                                                        return(event.target.value)
                                                      } else {
                                                        return(item)
                                                      }
                                                    }
                                                      )
 
      console.log(letterFormCtrl)

      this.setState({
        currentAnswer:  event.target.value.toUpperCase(), 
        letterEntry: this.state.letterEntry + 1,
        currentLetters: letterFormCtrl
        
      }) 
    } else if(this.state.letterEntry === 2) {
      console.log(this.state.currentLetters)
      const letterFormCtrl = this.state.currentLetters.map((item, index) => 
                                                      {if(index===1){
                                                        return(event.target.value)
                                                      } else {
                                                        return(item)
                                                      }}
                                                      )
      console.log(letterFormCtrl)
      this.setState({
        currentAnswer: this.state.currentAnswer + event.target.value.toUpperCase(), 
        letterEntry: this.state.letterEntry + 1,
        currentLetters: letterFormCtrl
//        currentLetters: [...this.state.currentLetters, event.target.value.toUpperCase()]
      }) 
    } else {
      this.setState((state) => {
        const newAnswerArr = [...this.state.currentAnswers, this.state.currentAnswer + event.target.value.toUpperCase()]; 
        return {
          letterEntry:  1,
          currentAnswer: "", // Not necessary, but nice
          currentAnswers: newAnswerArr, 
          questionNum: this.state.questionNum + 1, 
          currentLetters: ["", "", ""]
        }
    });
  }
}


  logState(){
    console.log(this.state); 
  }


  render() {
    return(
    <div className="App">
      <h1>Do you know your Airport Codes?</h1>
      <GameStage gameStatus={this.state.gameStatus} 
        updatePoolProp = {this.updatePool} 
        activeLetter = {this.state.letterEntry} 
        saveAnswer = {this.saveAnswer} 
        currentLetters = {this.currentLetters} />
      <br/>
      <br/>
      <div onClick={this.logState}>Click to Log State</div>  
    </div>
    )
  }
}

export default App