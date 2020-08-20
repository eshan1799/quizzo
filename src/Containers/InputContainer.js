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
      topic: "animals",
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
      case "general knowledge":
        category = 9;
        break;
      case "sports":
        category = 21;
        break;
      case "science":
        category = 17;
        break;
      case "maths":
        category = 19;
        break;
      case "geography":
        category = 22;
        break;
      case "films":
        category = 11;
        break;
      case "music":
        category = 12;
        break;
      case "TV":
        category = 14;
        break;
      case "video games":
        category = 15;
        break;
      case "history":
        category = 23;
        break;
      case "animals":
        category = 27;
        break;
      case "gadgets":
        category = 30;
        break;
      case "vehicles":
        category = 28;
        break;
      case "celebrities":
        category = 26;
        break;
      default:
        category = 9;
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
              maxLength="10"
              placeholder="Enter player name"
              onChange={this.handleInput}
            ></input>
            <label htmlFor="topic">Topic</label>
            <select
              required
              name="topic"
              id="topic"
              onChange={this.handleInput}
            >
              <option value="">Choose a topic</option>
              <option value="animals">Animals</option>
              <option value="celebrities">Celebritites</option>
              <option value="films">Films</option>
              <option value="gadgets">Gadgets</option>
              <option value="general knowledge">General Knowledge</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="maths">Maths</option>
              <option value="music">Music</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="TV">TV</option>
              <option value="vehicles">Vehicles</option>
              <option value="video games">Video Games</option>
            </select>
            <label htmlFor="difficulty">Difficulty</label>
            <select
              required
              name="difficulty"
              id="difficulty"
              defaultValue="Good"
              onChange={this.handleInput}
            >
              <option value="">Choose a difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <input id="submitPlayerButton" type="submit"></input>
          </form>
          <button onClick={this.closeModalButton}>Close</button>
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

      {/*    <ol>
            {this.props.players.map((player, index) => {
              return (
                <li key={index}>
                  Player name: {player.name}, Difficulty: {player.difficulty},
                  Topic: {player.topic}
                  <button onClick={() => this.props.deletePlayer(index)}>Delete</button>
                </li>
              );
            })}
          </ol> */}

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
