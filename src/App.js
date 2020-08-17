import React from "react";
import InputContainer from "./Containers/InputContainer";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./styles/App.css";
class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section id='welcomePage'>
          <h1>Trivia</h1>
          <AnchorLink href='#addPlayerButton'>
            <button>Start quiz</button>
          </AnchorLink>
        </section>
        <InputContainer />
      </>
    );
  }
}
export default App;
