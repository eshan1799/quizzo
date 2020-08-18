import React, { Component } from 'react';

class QuestionComponent extends Component {
    render(){
        // Create randomised array of answers
        const ansArr = [...this.props.incorrect_answers, this.props.correct_answer];
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(ansArr);

        // Interpret special characters that begin with & and end in ;
        console.log(decodecodeURI(this.props.question))

        return(
            // The button that is selected should be checked against the correct answer, if it is correct score should be increased by 1
            <div>
                <form onSubmit={this.props.on_submit}>
                <h1>Player: {this.props.name}</h1>
                <h2>Question {this.props.question_no}</h2>
                <h2>{this.props.question}?</h2>
                <input required type="radio" name="answer" id="1st" value={ansArr[0]}></input>
                <label htmlFor="1st">{ansArr[0]}</label>
                <input type="radio" name="answer" id="2nd" value={ansArr[1]}></input>
                <label htmlFor="2nd">{ansArr[1]}</label>
                <input type="radio" name="answer" id="3rd" value={ansArr[2]}></input>
                <label htmlFor="3rd">{ansArr[2]}</label>
                <input type="radio" name="answer" id="4th" value={ansArr[3]}></input>
                <label htmlFor="4th">{ansArr[3]}</label>
                <input type="submit" value="Submit Answer"></input>
                </form>
            </div>
        )
    }
}

export default QuestionComponent;