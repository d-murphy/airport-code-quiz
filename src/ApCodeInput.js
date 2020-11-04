import React from 'react';

class ApCodeInput extends React.Component {
    render() {
      if(this.props.activeLetter == this.props.thisLetter){
        return (
          <div class="codeEntry">
            <form onSubmit={this.handleSubmit}>
              <textarea />
            </form>
          </div>
        )} else {
          return(
          <div class="codeEntryDisabled">
            <form onSubmit={this.handleSubmit}>
              <textarea disabled/>
            </form>
          </div>
            
          )}

        }
  }

  export default ApCodeInput; 