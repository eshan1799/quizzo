import React, { Component } from 'react';

class QuestionComponent extends Component {
    render(){
        return(
            <button onClick={this.props.onclick}>Click</button>
        )
    }
}

export default QuestionComponent;