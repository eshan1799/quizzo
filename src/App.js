import React from "react";
import "./styles/App.css";
import QuestionComponent from "./Containers/QuestionContainer"
class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h1>New React App</h1>
        <h2>Happy Coding</h2>
        <QuestionComponent/>

      </>
    );
  }
}
export default App;
