import React, { Component } from "react";
import ReactModal from "react-modal";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");
import { NavLink } from "react-router-dom";

class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      topic: "generalKnowledge",
      difficulty: "easy",
      chooseNoQ: false,
      numOfQuestions: 5,
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
      case "generalKnowledge":
        category = 9;
        break;
      case "sports":
        category = 21;
        break;
      case "science":
        category = 19;
        break;
      case "geography":
        category = 22;
        break;
      default:
        category = 0;
    }

    const userurl = `https://opentdb.com/api.php?amount=${this.state.numOfQuestions}&category=${category}&difficulty=${this.state.difficulty}&type=multiple&encode=url3986`;

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
    this.setState({ chooseNoQ : true })
  }

  render() {
    return (
      !this.state.chooseNoQ ?
      <main>
      <form id="addPlayerButton" onSubmit={this.handleQuestionChoice}>
        <h3>How many questions should be in your quiz?</h3>
          <select onChange={this.handleInput} name="numOfQuestions">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input type="submit"></input>
      </form>
      </main>
      :
      <main>
        <button id="addPlayerButton" onClick={this.handleOpenModal}>
          Add player
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="addPlayer Modal"
        >
          <form onSubmit={() => this.handleCloseModal(event)}>
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Enter player name"
              onChange={this.handleInput}
            ></input>
            <label htmlFor="topic">Topic</label>
            <select
              name="topic"
              id="topic"
              defaultValue="Hello"
              onChange={this.handleInput}
            >
              <option value="generalKnowledge">General Knowledge</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="geography">Geography</option>
            </select>
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              defaultValue="Good"
              onChange={this.handleInput}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <input id="submitPlayerButton" type="submit"></input>
          </form>
          <button onClick={this.closeModalButton}>Close</button>
        </ReactModal>

        <div id="playerList">
          <ol>
            {this.props.players.map((player, index) => {
              return (
                <li key={index}>
                  Player name: {player.name}, Difficulty: {player.difficulty},
                  Topic: {player.topic}
                  <button onClick={() => this.props.deletePlayer(index)}>Delete</button>
                </li>
              );
            })}
          </ol>
        </div>
        {this.props.players.length !== 0 ?
          <NavLink to="/questions">
            <button>Start</button>
          </NavLink> :
          null
        }
      </main>
    );
  }
}

export default InputContainer;
