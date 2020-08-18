import React from "react";
import InputContainer from "./Containers/InputContainer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import QuestionComponent from "./Containers/QuestionContainer";
import ResultsContainer from "./Containers/ResultsContainer"

class App extends React.Component {
  state = {
    playerCount: 0,
    questionCount: 0,
    leaderboard: [],
    players: [],
    score: [],
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
            exact
            path="/"
            render={(props) => (
              <>
                <section id="welcomePage">
                  <h1>Trivia</h1>
                  <AnchorLink href="#addPlayerButton">
                    <button>Start quiz</button>
                  </AnchorLink>
                </section>

                <InputContainer
                  {...props}
                  handleToUpdate={this.handleToUpdate.bind(this)}
                  players={this.state.players}
                />
              </>
            )}
          />
          <Route
            path="/questions"
            render={() => (
              <QuestionComponent
                //{...props}
                state={this.state}
                finalScore={this.finalScore.bind(this)}
              />
            )}
          ></Route>
          <Route
            path="/results"
            render={() => (
              <ResultsContainer state={this.state}/>
            )}
          ></Route>
          <Route path="/test" render={() => <h1 id="welcome">Welcome</h1>} />
        </Switch>
      </>
    );
  }
}
export default App;
