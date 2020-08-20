import React, { Component } from "react";
import "../styles/InstructionsComponent.css"

class InstructionsComponent extends Component {

    render() {
        return (
            <>
                <h1>Instructions</h1>
                <div id="InstructionsBody">
                    <h2>How to Play</h2>
                    <ol>
                        <li>Click "Start Quiz" Button</li>
                        <li>Select how many questions each player in the group will answer (individually!)</li>
                        <li>Each enter a nickname and select your individual topic and difficulty level</li>
                        <li>Check everyone is good to go, then press start</li>
                        <li>Have Fun!</li>
                    </ol>

                    <h2>Scoring</h2>

                    <table>
                        <thead>
                            <tr>
                                <th className="left">Difficulty</th>
                                <th className="center">Correct Answer</th>
                                <th className="right">Incorrect Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="left">Easy</td>
                                <td className="center">100 Points</td>
                                <td className="right">0 Points</td>
                            </tr>
                            <tr>
                                <td className="left">Medium</td>
                                <td className="center">200 Points</td>
                                <td className="right">-100 Points</td>
                            </tr>
                            <tr>
                                <td className="left">Hard</td>
                                <td className="center">300 Points</td>
                                <td className="right">-200 Points</td>
                            </tr>

                        </tbody>
                    </table>
                </div >
                <i id="closeInstructions" onClick={this.props.onClick} class="far fa-window-close fa-3x"></i>
            </>

        );
    }
}

export default InstructionsComponent;