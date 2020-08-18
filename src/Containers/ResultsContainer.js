import React, { Component } from 'react';

class ResultsContainer extends Component {
    render(){
        console.log(this.props.state);
        return(
            <div>
                <h1>Results Page</h1>
            </div>
        )
    }
}

export default ResultsContainer;