import React, { Component } from "react";
import QuestionComponent from "../Components/QuestionComponent";
import { Redirect } from "react-router-dom";

//let counter = 0;

class QuestionContainer extends Component {
  state = this.props.state;

  snapState = {};
  resetState = () => {
    return this.setState({...this.snapState})
  }

  componentDidMount() {
    let scoreArr = [];
    for (const player of this.state.players) {
      scoreArr.push(0);
    }
    this.setState({ score: scoreArr });
    this.setState({ redirect: false });
  }

  componentWillUnmount() {
    this.props.finalScore(this.state.score);
    this.resetState();
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
        this.setState({ redirect: true });
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
    let newScore = [...this.state.score];
    let positive_muliplier
    let negative_muliplier

    switch (this.state.players[this.state.playerCount].difficulty) {
      case "medium":
        positive_muliplier = 2;
        negative_muliplier = 1;
        break;
      case "hard":
        positive_muliplier = 3;
        negative_muliplier = 2;
        break;
      default:
        positive_muliplier = 1;
        negative_muliplier = 0;
        break;
    }

    if (answer === corrAns) {
      newScore[this.state.playerCount] += 100 * positive_muliplier;
    } else {
      newScore[this.state.playerCount] -= 100 * negative_muliplier
    }
    this.setState(
      {
        score: newScore,
      },
      () => console.log(this.state.score)
    );
    
  };

  render() {
    //It's running everything twice?
    //counter = counter + 1;
    if (this.state.redirect){
      return (
        <div>
          <Redirect to="/results"/>
        </div>
      )
    } else {
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
}

export default QuestionContainer;
