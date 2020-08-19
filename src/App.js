import React from "react";
import InputContainer from "./Containers/InputContainer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import QuestionContainer from "./Containers/QuestionContainer";
import ResultsContainer from "./Containers/ResultsContainer"

class App extends React.Component {
  state = {
    playerCount: 0,
    questionCount: 0,
    leaderboard: [],
    players: [],
    score: [],
  };

  snapState = {...this.state};

  resetState = () => {
    this.setState({...this.snapState})
  };

  handleToUpdate(someArg) {
    this.setState((prevState) => ({
      players: [...prevState.players, someArg],
    }));
  }

  finalScore = (score) => {
    this.setState({ score: score });
  };

  render() {
    return (
      <>
        <h1>Quizzo!</h1>

        <Switch>
          <Route
            id="path1"
            exact
            path="/"
            render={() => (
              <>
                <section id="welcomePage">
                  <h1>Trivia</h1>
                  <AnchorLink href="#addPlayerButton">
                    <button>Start quiz</button>
                  </AnchorLink>
                </section>

                <InputContainer
                  handleToUpdate={this.handleToUpdate.bind(this)}
                  players={this.state.players}
                />
              </>
            )}
          />
          <Route
            id="path2"
            path="/questions"
            render={() => (
              <QuestionContainer
                //{...props}
                state={this.state}
                finalScore={this.finalScore.bind(this)}
              />
            )}
          ></Route>


          <Route
            id="path3"
            path="/results"
            render={() => (
              <ResultsContainer state={this.state} resetState={this.resetState.bind(this)}/>
            )}
          ></Route>


        </Switch>

      </>
    );
  }
}
export default App;
