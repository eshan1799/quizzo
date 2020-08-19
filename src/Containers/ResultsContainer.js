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

        for (let k=1; k < numOfPlayers; k++){
          if (nameAndScore[k-1].score === nameAndScore[k].score) {
            nameAndScore[k].index = nameAndScore[k-1].index
          }
        }

        const numberSuffix = (number) => {
          let suffix;
          switch (number){
            case 1:
              suffix = 'st'
              break;
            case 2:
              suffix = 'nd'
              break;
            case 3:
              suffix = 'rd'
              break;
            default:
              suffix = 'th'
          }
          return number+suffix
        }


        return(
            <div>
                <h1>Results Page</h1>
                    {nameAndScore.map(person =>
                        <h3 key={person.name + person.index}>
                          Position: {numberSuffix(person.index +1)}
                          <br/>
                          Player: {person.name}
                          <br/>
                          Score: {person.score}
                        </h3>)}

                    <NavLink onClick={this.props.resetState} to="/">
                        <button>New Quiz</button>
                    </NavLink>
            </div>
        )
    }
}

export default ResultsContainer;
