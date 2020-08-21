
import React, { Component } from 'react';
import "../styles/QuestionComponent.css"

class QuestionComponent extends Component {
  render() {
    // Create randomised array of answers
    let ansArr = [...this.props.incorrect_answers, this.props.correct_answer];
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(ansArr)
    const newAnsArr = ansArr.map(answer => {
      return decodeURIComponent(answer)
    })

    return (
      // The button that is selected should be checked against the correct answer, if it is correct score should be increased by 1
      <div id="answerBox">
        <form id="answerForm" onSubmit={this.props.on_submit}>
          <h3>Player: {this.props.name}</h3>
          <h2>Question {this.props.question_no}</h2>
          <h2>{decodeURIComponent(this.props.question)}</h2>
          <div id="answers">
            <input required type="radio" name="answer" id="1st" value={ansArr[0]} />
            <label htmlFor="1st">{newAnsArr[0]}</label>
            <br />
            <input type="radio" name="answer" id="2nd" value={ansArr[1]}></input>
            <label htmlFor="2nd">{newAnsArr[1]}</label>
            <br />
            <input type="radio" name="answer" id="3rd" value={ansArr[2]}></input>
            <label htmlFor="3rd">{newAnsArr[2]}</label>
            <br />
            <input type="radio" name="answer" id="4th" value={ansArr[3]}></input>
            <label htmlFor="4th">{newAnsArr[3]}</label>
            <br />
          </div>
          <input id="answerSubmit" type="submit" value="Submit Answer"></input>
        </form>
      </div>
    )
  }
}

export default QuestionComponent;
