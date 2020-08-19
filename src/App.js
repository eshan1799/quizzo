import React from "react";
import InputContainer from "./Containers/InputContainer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./styles/App.css";
import { Switch, Route, NavLink, Prompt, withRouter } from "react-router-dom";
import QuestionContainer from "./Containers/QuestionContainer";
import ResultsContainer from "./Containers/ResultsContainer";
import Error404 from "./Components/Error404";
import InstructionsComponent from "./Components/InstructionsComponent";
import ReactModal from "react-modal";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

class App extends React.Component {
  state = {
    playerCount: 0,
    questionCount: 0,
    leaderboard: [],
    players: [],
    score: [],
    showModal: false
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

  handleOpenModal= ()=> {
    this.setState({ showModal: true });
  }
  handleCloseModal=()=> {
    this.setState({ showModal: false });
  }

  render() {
    return ( 
      <>
        <nav>
          <button onClick={() => { 
            if (window.confirm("Are you sure? Going home will end current quiz!")) {
              this.resetState()
              this.setState({score:[]})
              this.props.history.push("/")
              // location.reload();
              console.log("Home")
            } else { 
              console.log("Cancelled")
            }
          }}>Home</button>
          <button onClick={this.handleOpenModal}>Instructions</button>
        </nav>
                
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <InstructionsComponent onClick={this.handleCloseModal.bind(this)}/>
        </ReactModal>
        


        <h1>Quizzo!</h1>
        {/* <Instructions /> */}

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
              <ResultsContainer
                state={this.state}
                resetState={this.resetState.bind(this)}
              />
            )}
          ></Route>
          
          {/* <Route
            id="instructions"
            page="/instructions"
            render={() => (
              <Instructions
              />
            )}
          ></Route> */}

          <Route
            id="path404"
            render={() => (
              <Error404
                resetState={this.resetState.bind(this)}
              />
            )}
          ></Route>

        </Switch>
      </>
    );
  }
}
export default withRouter(App);
