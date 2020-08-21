import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/ResultsContainer.css';

class ResultsContainer extends Component {
  numberSuffix = (number) => {
    let suffix;
    let colour;
    switch (number){
      case 1:
        colour = "fas fa-medal first"
        suffix = 'st'
        break;
      case 2:
        colour = "fas fa-medal second"
        suffix = 'nd'
        break;
      case 3:
        colour = "fas fa-medal third"
        suffix = 'rd'
        break;
      default:
        colour = ""
        suffix = 'th'
    }
    return [number+suffix, colour]
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
              <h1>Results</h1>
              <table id='tableResults'>
                <thead>
                  <tr>
                    <th className="medalCol"></th>
                    <th className="positionCol">Position</th>
                    <th className="nameCol">Name</th>
                    <th className="scoreCol">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {nameAndScore.map(person =>
                        <tr key={person.name + person.index}>
                          <td className='medalCol'><i className={this.numberSuffix(person.index +1)[1]}></i></td>
                          <td className='positionCol'>{this.numberSuffix(person.index +1)[0]}</td>
                          <td className='nameCol'>{person.name}</td>
                          <td className='scoreCol'>{person.score}</td>
                        </tr>
                      )
                    }
                </tbody>
              </table>

              <NavLink onClick={this.props.resetState} to="/">
                <button>New Quiz</button>
              </NavLink>
            </div>
        )
    }
}

export default ResultsContainer;