import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class ResultsContainer extends Component {
    render(){
        const numOfPlayers = this.props.state.score.length;
        const nameAndScore = []

        for (let i = 0; i < numOfPlayers; i++){
            nameAndScore.push({ name: this.props.state.players[i].name, score: this.props.state.score[i] })
        }
        
        nameAndScore.sort((a,b) => {
            return b.score - a.score;
        })
        
        // Add index after players have been sorted
        for (let j = 0; j < numOfPlayers; j++){
            nameAndScore[j].index = j;
        }

        return(
            <div>
                <h1>Results Page</h1>
                    {nameAndScore.map(person =>
                        <h3 key={person.index}>
                            Position:{person.index}
                            <br/>
                            Player:{person.name}
                            <br/>
                            Score:{person.score}
                        </h3>)}
                        
                    <NavLink onClick={this.pageRefresh} to="/">
                        <button>New Quiz</button>
                    </NavLink>
            </div>
        )
    }
}

export default ResultsContainer;