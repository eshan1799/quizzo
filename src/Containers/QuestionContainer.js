import React, { Component } from "react";
import QuestionComponent from "../Components/QuestionComponent";

class QuestionContainer extends Component {
  state = {
    playerCount: 0,
    questionCount: 0,
    leaderboard: [],
    players: [
      {
        name: "player1",
        questions: [
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the sun",
            correct_answer: "Yellow",
            incorrect_answers: ["White", "Green", "Blue"],
          },
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the moon",
            correct_answer: "Grey",
            incorrect_answers: ["Yellow", "Green", "Blue"],
          },
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the sun",
            correct_answer: "Yellow",
            incorrect_answers: ["White", "Green", "Blue"],
          },
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the moon",
            correct_answer: "Grey",
            incorrect_answers: ["Yellow", "Green", "Blue"],
          },
        ],
        score: 0,
      },
      {
        name: "player2",
        questions: [
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the sun",
            correct_answer: "Yellow",
            incorrect_answers: ["White", "Green", "Blue"],
          },
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the moon",
            correct_answer: "Grey",
            incorrect_answers: ["Yellow", "Green", "Blue"],
          },
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the sun",
            correct_answer: "Yellow",
            incorrect_answers: ["White", "Green", "Blue"],
          },
          {
            category: "Science",
            type: "multiple",
            difficulty: "easy",
            question: "What colour is the moon",
            correct_answer: "Grey",
            incorrect_answers: ["Yellow", "Green", "Blue"],
          },
        ],
        score: 0,
      },
    ],
  };

  changeQuestionHandler = () => {
    console.log(
      `Player: ${this.state.playerCount + 1} , Question: ${
        this.state.questionCount + 1
      }`
    );
    if (
      this.state.questionCount + 1 <
      this.state.players[this.state.playerCount].questions.length
    ) {
      this.setState((prev) => ({ questionCount: ++prev.questionCount }));
    } else if (this.state.playerCount + 1 < this.state.players.length) {
      this.setState({ questionCount: 0 });

      this.setState((prev) => {
        return { playerCount: ++prev.playerCount };
      });
    } else {
      console.log("Quiz End");
    }
  };

  render() {
    return (
      <div>
        <QuestionComponent
          onclick={this.changeQuestionHandler}
          // player={this.state.players[this.state.playerCount]}
          // question={this.state.players[this.state.playerCount].questions[this.state.questionCount].question}
          // correct_answer={this.state.players[this.state.playerCount].questions[this.state.questionCount].correct_answer}
          // incorrect_answer={this.state.players[this.state.playerCount].questions[this.state.questionCount].incorrect_answers}
        />
      </div>
    );
  }
}
export default QuestionContainer;
