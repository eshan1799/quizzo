import React from "react";
import InputContainer from "./Containers/InputContainer";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./styles/App.css";
import QuestionComponent from "./Containers/QuestionContainer"
class App extends React.Component {
  state = {players: []}

    handleToUpdate(someArg){
        this.setState(prevState => ({
          players: [...prevState.players, someArg]
        }));
    }

  render() {
    return (
      <>
        <h1>Quiz!</h1>
        <QuestionComponent/>

        <section id='welcomePage'>
          <h1>Trivia</h1>
          <AnchorLink href='#addPlayerButton'>
            <button>Start quiz</button>
          </AnchorLink>
        </section>
        <InputContainer handleToUpdate = {this.handleToUpdate.bind(this)} players = {this.state.players}/>
      </>
    );
  }
}
export default App;
