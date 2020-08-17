import React, { Component } from "react";
import QuestionComponent from "../Components/QuestionComponent";

class QuestionContainer extends Component {
  state = {
    playerCount: 0,
    questionCount: 0,
    leaderboard: [],
    players: [{}],
  };

  componentDidMount() {
    let scoreArr = [];
    for (const player of this.props.state.players) {
      scoreArr.push(0);
    }
    this.setState({ score: scoreArr });
  }

  changeQuestionHandler = (event) => {
    event.preventDefault();
    console.log(
      `Player: ${this.props.state.playerCount + 1}, Question: ${
        this.props.state.questionCount + 1
      }`
    );
    if (
      this.props.state.questionCount + 1 <
      this.props.state.players[this.props.state.playerCount].questions.length
    ) {
      this.setState((prev) => ({ questionCount: ++prev.questionCount }));
    } else if (
      this.props.state.playerCount + 1 <
      this.props.state.players.length
    ) {
      this.setState({ questionCount: 0 });

      this.setState((prev) => {
        return { playerCount: ++prev.playerCount };
      });
    } else {
      console.log("Quiz End");
    }

    // Function to check if answer is correct
    this.checkAnswer(event.target.answer.value);

    event.target.reset();
  };

  checkAnswer = (answer) => {
    const corrAns = this.props.state.players[this.props.state.playerCount]
      .questions[this.props.state.questionCount].correct_answer;
    //const idx = this.props.state.playerCount
    if (answer === corrAns) {
      let newScore = [...this.props.state.score];
      newScore[this.props.state.playerCount]++;
      this.setState(
        {
          score: newScore,
        },
        () => console.log(this.props.state.score)
      );
    }
  };

  render() {
    return (
      <div>
        <QuestionComponent
          on_submit={this.changeQuestionHandler}
          question_no={this.props.state.questionCount + 1}
          name={this.props.state.players[0].name}
          question={
            this.props.state.players[this.props.state.playerCount].questions[
              this.props.state.questionCount
            ].question
          }
          correct_answer={
            this.props.state.players[this.props.state.playerCount].questions[
              this.props.state.questionCount
            ].correct_answer
          }
          incorrect_answers={
            this.props.state.players[this.props.state.playerCount].questions[
              this.props.state.questionCount
            ].incorrect_answers
          }
        />
      </div>
    );
  }
}

export default QuestionContainer;
