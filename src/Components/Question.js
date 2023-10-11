import React, {Component} from "react";
import '../App.css';
 
class Question extends Component{
    render() {
        const {currentQuestionIndex, handleOptionClick, calculateResultClass, QnA,prevClick,nextClick } = this.props;
 
        return(
            <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <img src={QnA[currentQuestionIndex].image} alt="My Image" className="image-class"/>
            <p>{QnA[currentQuestionIndex].question}</p>
            <ul>
              {QnA[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  className={calculateResultClass(option)+ (option === this.props.selectedOption ? ' selected' : '')}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
                
              ))}
            </ul>
            <div className="button-container">
          {currentQuestionIndex > 0 && (
            <button onClick={prevClick}>Previous</button>
          )}
          <button onClick={nextClick}>
            Next
          </button>
        </div>
          </div>

          
        )
    }
}
 
export default Question;