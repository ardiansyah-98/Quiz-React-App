import React, {Component} from "react";

 
class Question extends Component{
    render() {
        const {currentQuestionIndex, handleOptionClick, calculateResultClass, QnA,onPrevQuestion,onNextQuestion} = this.props;
 
        return(
            <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{QnA[currentQuestionIndex].question}</p>
            <ul>
              {QnA[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  className={calculateResultClass(option)}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
                
              ))}
            </ul>
          </div>

          
        )
    }
}
 
export default Question;