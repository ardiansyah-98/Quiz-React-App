import React, { Component } from 'react';
import '../App.css'
 
class Score extends Component {
    render() {
        const { score, tryagain, finish ,currentQuestionIndex} = this.props;
 
        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}/{currentQuestionIndex}</h4>
                <div className="button-container">
                    <button onClick={tryagain}>Try again</button>
                </div>
            </div>

            
        );
    }
}
 
export default Score;