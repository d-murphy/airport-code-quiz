import React from 'react';

class ApCodeInput extends React.Component {
    render() {
      if(this.props.activeLetter == this.props.thisLetter){
        return (
          <div class="codeEntry">
            <form >
              <textarea onChange={this.props.saveAnswer} maxlength="1"  />
            </form>
          </div>
        )} else {
          return(
          <div class="codeEntryDisabled">
            <form >
              <textarea disabled/>
            </form>
          </div>
            
          )}

        }
  }

  export default ApCodeInput; 