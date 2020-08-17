import React, { Component } from 'react';
import QuestionComponent from '../Components/QuestionComponent'

class QuestionContainer extends Component {
    state = {
        playerCount: 0,
        questionCount: 0,
        leaderboard=[],
        players: [
            {name: "player1",
             questions: [
                 {
                     category: "Science",
                     type: "multiple",
                     difficulty: "easy",
                     question: "What colour is the sun",
                     correct_answer: "Yellow",
                     incorrect_answers: [
                         "White",
                         "Green",
                         "Blue"
                     ]
                },
                {
                    category: "Science",
                    type: "multiple",
                    difficulty: "easy",
                    question: "What colour is the moon",
                    correct_answer: "Grey",
                    incorrect_answers: [
                        "Yellow",
                        "Green",
                        "Blue"
                    ]
               }
                ],
             score:0   
            },
             {name: "player2",
             questions: [
                 {
                     category: "Science",
                     type: "multiple",
                     difficulty: "easy",
                     question: "What colour is the sun",
                     correct_answer: "Yellow",
                     incorrect_answers: [
                         "White",
                         "Green",
                         "Blue"
                     ]
                },
                {
                    category: "Science",
                    type: "multiple",
                    difficulty: "easy",
                    question: "What colour is the moon",
                    correct_answer: "Grey",
                    incorrect_answers: [
                        "Yellow",
                        "Green",
                        "Blue"
                    ]
               }
                ],
             score:0
             }
        ]
    }
    
    changeQuestionHandler = () => {
        if (this.state.questionCount < this.state.players[this.state.playerCount].questions.length) {
            this.setState((prev)=>{ return ({ questionCount:prev.questionCount++ })})
        } else {
            this.setState({ questionCount: 0 })
            if (this.state.playerCount < this.state.players.length) {
                this.setState((prev) => { return ({ playerCount: prev.playerCount++ }) })
            } else {
                console.log("end")
            }
        }   
    }

    render() {
        return (
            <div>
                <QuestionComponent onclick={this.changeQuestionHandler}/>
            </div>
        )
    }
}
export default QuestionContainer;