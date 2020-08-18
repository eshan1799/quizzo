import React, { Component } from "react";
import QuestionComponent from "../Components/QuestionComponent";

class QuestionContainer extends Component {
  state = this.props.state;

  componentDidMount() {
    let scoreArr = [];
    for (const player of this.state.players) {
      scoreArr.push(0);
    }
    this.setState({ score: scoreArr });
  }

  changeQuestionHandler = (event) => {
    event.preventDefault();
    console.log(
      `Player: ${this.state.playerCount + 1}, Question: ${
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
      this.props.finalScore(this.state.score);
      console.log("Quiz End");
    }

    // Function to check if answer is correct
    this.checkAnswer(event.target.answer.value);

    event.target.reset();
  };

  checkAnswer = (answer) => {
    const corrAns = this.state.players[this.state.playerCount].questions[
      this.state.questionCount
    ].correct_answer;
    //const idx = this.state.playerCount
    if (answer === corrAns) {
      let newScore = [...this.state.score];
      newScore[this.state.playerCount]++;
      this.setState(
        {
          score: newScore,
        },
        () => console.log(this.state.score)
      );
    }
  };

  render() {
    return (
      <div>
        <QuestionComponent
          on_submit={this.changeQuestionHandler}
          question_no={this.state.questionCount + 1}
          name={this.state.players[this.state.playerCount].name}
          question={
            this.state.players[this.state.playerCount].questions[
              this.state.questionCount
            ].question
          }
          correct_answer={
            this.state.players[this.state.playerCount].questions[
              this.state.questionCount
            ].correct_answer
          }
          incorrect_answers={
            this.state.players[this.state.playerCount].questions[
              this.state.questionCount
            ].incorrect_answers
          }
        />
      </div>
    );
  }
}

export default QuestionContainer;
