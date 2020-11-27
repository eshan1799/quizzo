import React, { Component } from "react";
import ReactModal from "react-modal";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

class PopupComponent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: true,
    };

    // this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // handleOpenModal() {
  //   this.setState({ showModal: true });
  // }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }


  render() {
    return (
      <ReactModal isOpen={this.state.showModal} contentLabel="addPlayer Modal">
        <h1>{this.props.player}</h1>
        <h2>Topic: {this.props.topic}</h2>
        <h2>Difficulty: {this.props.difficulty}</h2>
        <h1>Are you ready to play?</h1>

        <button onClick={this.handleCloseModal}>Start</button>
      </ReactModal>
    );

  }
}

export default PopupComponent;
