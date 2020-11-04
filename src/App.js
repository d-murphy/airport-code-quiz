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
  if (gameStatus == 'SelectPool') {
    return <GameControl updatePoolProp={props.updatePoolProp}
                        updateStageProp={props.updateStage} />;
  }
  return (<div class="codeInput">
            <ApCodeInput activeLetter={props.activeLetter} thisLetter={1}/>
            <ApCodeInput activeLetter={props.activeLetter} thisLetter={2}/>
            <ApCodeInput activeLetter={props.activeLetter} thisLetter={3}/>
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
      letterEntry: 1
    }; 
    this.updatePool = this.updatePool.bind(this);
    this.logState = this.logState.bind(this);
  }

  updatePool(event) {
    this.setState({gamePool: event.target.value, 
                   gameStatus: "gameStage"});
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
        activeLetter = {this.state.letterEntry} />
      <br/>
      <br/>
      <div onClick={this.logState}>Click to Log State</div>  
    </div>
    )
  }
}

export default App