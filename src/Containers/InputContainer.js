import React, { Component } from "react";
import ReactModal from "react-modal";
import "../styles/InputContainer.css";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");
import { NavLink } from "react-router-dom";

class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      chooseNoQ: false,
      numOfQuestions: 5
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState({ showModal: false });

    let category;

    switch (this.state.topic) {
      case "General Knowledge":
        category = 9;
        break;
      case "Sports":
        category = 21;
        break;
      case "Science":
        category = 17;
        break;
      case "Maths":
        category = 19;
        break;
      case "Geography":
        category = 22;
        break;
      case "Films":
        category = 11;
        break;
      case "Music":
        category = 12;
        break;
      case "TV":
        category = 14;
        break;
      case "Video Games":
        category = 15;
        break;
      case "History":
        category = 23;
        break;
      case "Animals":
        category = 27;
        break;
      case "Gadgets":
        category = 30;
        break;
      case "Vehicles":
        category = 28;
        break;
      case "Celebrities":
        category = 26;
        break;
      default:
        category = 9;
    }

    const userurl = `https://opentdb.com/api.php?amount=${this.state.numOfQuestions}&category=${category}&difficulty=${this.state.difficulty.toLowerCase()}&type=multiple&encode=url3986`;

    fetch(userurl)
      .then((r) => r.json())
      .then(this.updateProps)
      .catch((err) => console.warn("Oh dear...", err));
  }

  closeModalButton = () => {
    this.setState({ showModal: false });
  }

  updateProps = (item) => {
    let obj = {
      name: this.state.name,
      questions: item.results,
      difficulty: this.state.difficulty,
      topic: this.state.topic,
    };

    this.props.handleToUpdate(obj);
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleQuestionChoice = (e) => {
    e.preventDefault();
    this.setState({ chooseNoQ: true })
  }

  render() {
    return (
      !this.state.chooseNoQ ?
        <main>
          <form id="questionForm" onSubmit={this.handleQuestionChoice}>
            <h3 id="questionHeading">How many questions should be in each round?</h3>
            <select id="questionNumber" onChange={this.handleInput} name="numOfQuestions">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <input id="questionSubmit" type="submit"></input>
          </form>
        </main>
        :
        <main>
          <h1 id="pageHeading">Pick your speciality!</h1>
          <button id="addPlayerButton" onClick={this.handleOpenModal}>
            Add player
        </button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="addPlayer Modal"
          >
            <h1>Add New Player</h1>
            <form id="addPlayerForm" onSubmit={() => this.handleCloseModal(event)}>

              <input
                required
                id="name"
                name="name"
                type="text"
                maxLength="10"
                placeholder="Choose a nickname (Max 10 characters)"
                onChange={this.handleInput}
              ></input>

              <select
                required
                name="topic"
                id="topic"
                onChange={this.handleInput}
              >
                <option value="">Choose a topic</option>
                <option value="Animals">Animals</option>
                <option value="Celebrities">Celebritites</option>
                <option value="Films">Films</option>
                <option value="Gadgets">Gadgets</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Geography">Geography</option>
                <option value="History">History</option>
                <option value="Maths">Maths</option>
                <option value="Music">Music</option>
                <option value="Science">Science</option>
                <option value="Pports">Sports</option>
                <option value="TV">TV</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Video Games">Video Games</option>
              </select>

              <select
                required
                name="difficulty"
                id="difficulty"
                defaultValue="Good"
                onChange={this.handleInput}
              >
                <option value="">Choose a difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              <input id="submitPlayerButton" type="submit"></input>
            </form>
            <i id="close" onClick={this.closeModalButton} class="far fa-window-close fa-3x"></i>
          </ReactModal>

          <div id="playerList">
            <table>
              <thead>
                <tr>
                  <th id="nameCol">Name</th>
                  <th id="topicCol">Topic</th>
                  <th id="diffCol">Difficulty</th>
                  <th id="deleteCol"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.players.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>{player.topic}</td>
                      <td>{player.difficulty}</td>
                      <td><button onClick={() => this.props.deletePlayer(index)}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

          </div>
          {this.props.players.length !== 0 ?
            <NavLink to="/questions">
              <button id="start">Start</button>
            </NavLink> :
            null
          }
        </main>
    );
  }
}

export default InputContainer;
