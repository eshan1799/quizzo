import React, { Component } from "react";
import ReactModal from "react-modal";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");
import { NavLink } from "react-router-dom";

class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      topic: "animals",
      difficulty: "easy",
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

    const userurl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${this.state.difficulty}&type=multiple&encode=url3986`;

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

  render() {
    return (
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
              <option value="animals">Animals</option>
              <option value="celebrities">Celebritites</option>
              <option value="films">Films</option>
              <option value="gadgets">Gadgets</option>
              <option value="general knowledge">General Knowledge</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="music">Music</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="TV">TV</option>
              <option value="vehicles">Vehicles</option>
              <option value="video games">Video Games</option>
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
