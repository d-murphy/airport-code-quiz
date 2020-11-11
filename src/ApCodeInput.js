import React from 'react';

class ApCodeInput extends React.Component {
  render() {

    if(this.props.activeLetter === this.props.thisLetter){
      return (
        <div class="codeEntry" id="activeLetter" ref="titleInput">
          <form >
            <textarea 
            onChange={this.props.saveAnswer} maxLength="1" autoFocus class="letterEntry" 
            value = {this.props.currentLetter}  />
          </form>
        </div>
      )} else {
        return(
        <div class="codeEntryDisabled" >
          <form >
            <textarea disabled value = {this.props.currentLetter} />
          </form>
        </div>
      )}
    }
  }

  export default ApCodeInput; 