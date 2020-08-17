import React, { Component } from "react";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
// import DropdownComponent from "../Components/DropdownComponent";

class InputContainer extends Component {

    constructor () {
        super();
        this.state = {
            showModal: false,
            topic: 'generalKnowledge',
            difficulty: 'easy'  
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        }
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      handleCloseModal = e => {
        this.setState({ showModal: false });
      }

      handleInput = e => {
          const { name, value } = e.target;
          this.setState({ [name]: value })
      }

    //   handleFormSubmit = e => {
    //     e.preventDefault();
    //     this.setState({ showModal: false });
    // }

    render() {

        return (
            <main>
                <button id='addPlayerButton' onClick={this.handleOpenModal}>Add player</button>
                <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input id='name' name='name' type='text' placeholder='Enter player name' onChange={this.handleInput}></input>
                        <label htmlFor="topic">Topic</label>
                        <select name="topic" id="topic" defaultValue='Hello' onChange={this.handleInput}>
                                {/* <option disabled selected value> -- select an option -- </option> */}
                                <option value="generalKnowledge">General Knowledge</option>
                                <option value="sports">Sports</option>
                                <option value="science">Science</option>
                                <option value="geography">Geography</option>
                            </select>
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" defaultValue='Good' onChange={this.handleInput}>
                            {/* <option disabled selected value> -- select an option -- </option>   */}
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        {/* <input type='submit' value='submit'>Add</input> */}
                        <button type='submit' onClick={this.handleCloseModal}>Close Modal</button>                   
                    </form>
                </ReactModal>

                <div id='playerList'>
                    <ol>
                        <p>No players</p>
                    </ol>
                </div>
                <button>Start</button>
            </main>
        )
    }
}

export default InputContainer;