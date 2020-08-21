import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class ResultsContainer extends Component {
  numberSuffix = (number) => {
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

  sortPlayers = (array) => {
    array.sort((a,b) => {
      return b.score - a.score;
    })
    return array
  }

  indexPlayers = (array) => {
    const numOfPlayers = this.props.state.score.length
    for (let j = 0; j < numOfPlayers; j++){
      array[j].index = j;
    }

    for (let k=1; k < numOfPlayers; k++){
      if (array[k-1].score === array[k].score) {
        array[k].index = array[k-1].index
      }
    }
    return array
  }

  render(){
        const numOfPlayers = this.props.state.score.length;
        const nameAndScore = [];

        for (let i = 0; i < numOfPlayers; i++){
            nameAndScore.push({ name: this.props.state.players[i].name, score: this.props.state.score[i] })
        }

        this.sortPlayers(nameAndScore)
        this.indexPlayers(nameAndScore)

        return(
            <div id="resultsContainer">
                <h1>Results Page</h1>
                    {nameAndScore.map(person =>
                        <h3 key={person.name + person.index}>
                          Position: {this.numberSuffix(person.index +1)}
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