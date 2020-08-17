import React, { Component } from 'react';

class QuestionComponent extends Component {
    render(){
        return(
            // The button that is selected should be checked against the correct answer, if it is correct score should be increased by 1
            <div>
                <form onSubmit={this.props.on_submit}>
                <h1>Player: {this.props.name}</h1>
                <h2>Question {this.props.question_no}</h2>
                <h2>{this.props.question}?</h2>
                <input required type="radio" name="answer" id="1st" value={this.props.correct_answer}></input>
                <label htmlFor="1st">{this.props.correct_answer}</label>
                <input type="radio" name="answer" id="2nd" value={this.props.incorrect_answers[0]}></input>
                <label htmlFor="2nd">{this.props.incorrect_answers[0]}</label>
                <input type="radio" name="answer" id="3rd" value={this.props.incorrect_answers[1]}></input>
                <label htmlFor="3rd">{this.props.incorrect_answers[1]}</label>
                <input type="radio" name="answer" id="4th" value={this.props.incorrect_answers[2]}></input>
                <label htmlFor="4th">{this.props.incorrect_answers[2]}</label>
                <input type="submit" value="Submit Answer"></input>
                </form>
            </div>
        )
    }
}

export default QuestionComponent;