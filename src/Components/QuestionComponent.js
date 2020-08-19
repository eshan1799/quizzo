
import React, { Component } from 'react';

class QuestionComponent extends Component {
    render(){
        // Create randomised array of answers
        let ansArr = [...this.props.incorrect_answers, this.props.correct_answer];
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function replaceSymbols(question) {

            const symbols = [
                {
                  code: '&#039;',
                  symbol: "'"
                },
                {
                  code: '&ldquo;',
                  symbol: "'"
                },
                {
                  code: '&hellip;',
                  symbol: "..."
                },
                {
                  code: '&quot;',
                  symbol: '"'
                },
                {
                  code: '&rdquo;',
                  symbol: "'"
                },
                {
                  code: '&shy;',
                  symbol: "-"
                },
                {
                  code: '&rsquo;',
                  symbol: "'"
                },
                {
                  code: '&oacute;',
                  symbol: "ó"
                },
                {
                  code: '&Eacute;',
                  symbol: "é"
                }
            ];

            for(let i=0; i<symbols.length; i++) {
                question = question.replace(new RegExp(symbols[i].code, 'g'), symbols[i].symbol)
            }

            return question
        }

        shuffleArray(ansArr)
        const newAnsArr = ansArr.map(answer => {
            return replaceSymbols(answer)
        })

        return(
            // The button that is selected should be checked against the correct answer, if it is correct score should be increased by 1
            <div>
                <form onSubmit={this.props.on_submit}>
                <h1>Player: {this.props.name}</h1>
                <h2>Question {this.props.question_no}</h2>
                <h2>{replaceSymbols(this.props.question)}</h2>
                <input required type="radio" name="answer" id="1st" value={ansArr[0]}></input>
                <label htmlFor="1st">{newAnsArr[0]}</label>
                <input type="radio" name="answer" id="2nd" value={ansArr[1]}></input>
                <label htmlFor="2nd">{newAnsArr[1]}</label>
                <input type="radio" name="answer" id="3rd" value={ansArr[2]}></input>
                <label htmlFor="3rd">{newAnsArr[2]}</label>
                <input type="radio" name="answer" id="4th" value={ansArr[3]}></input>
                <label htmlFor="4th">{newAnsArr[3]}</label>
                <input type="submit" value="Submit Answer"></input>
                </form>
            </div>
        )
    }
}

export default QuestionComponent;
