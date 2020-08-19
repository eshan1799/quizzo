import React, { Component } from "react";
import ReactModal from "react-modal";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

class Instructions extends Component {
    constructor() {
      super();
      this.state = {
        showModal: false
      };
  
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
  
    handleOpenModal() {
      this.setState({ showModal: true });
    }
    handleCloseModal() {
      this.setState({ showModal: false });
    }

    render() {
        return (
            <main>
            {/* <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
            >
                {/* <form onSubmit={() => this.handleCloseModal(event)}>
                </form> */}

                {/* <h3>Instructions:</h3>
                <p>Click 'start' and then play</p>

                <button onClick={this.handleCloseModal()}>Close Instructions</button>
            </ReactModal> */} */}

            </main>
        );
    }
}
  
  export default Instructions;