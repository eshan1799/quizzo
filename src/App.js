import React from "react";
import "./styles/App.css";
import QuestionComponent from "./Containers/QuestionContainer"
class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h1>Quiz!</h1>
        <QuestionComponent/>

      </>
    );
  }
}
export default App;
