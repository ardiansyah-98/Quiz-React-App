
import QnA from "./Components/QuestionData";
import Score from "./Components/Score";
import React, { useState } from 'react';
import './App.css';
import Question from "./Components/Question";

function App() {
  
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  var [currentScore, setScore] = useState(0);
  //const [showResults, setShowResults] = useState(false);
  const [quizEnd,setQuizEnd]= useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === QnA[currentQuestionIndex].answer) {
      setScore(currentScore + 1); }   
    //checkAnswer(option);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < QnA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      //setShowResults(true);
      setQuizEnd(true);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setQuizEnd(false);
    }
  };

  var calculateResultClass = (option) => {
      if (option === QnA[currentQuestionIndex].answer) {
        setScore(currentScore + 1);        
        return 'WTF';
      } else if (option === selectedOption) {
        return 'incorrect';
      }
    
    //return '';
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="question-container">
        {quizEnd ? (
        
        <Score
                        score={currentScore}
                         
                    />
        ) : ( <Question
            
                currentQuestionIndex={currentQuestionIndex}
                handleOptionClick={handleOptionClick}
                calculateResultClass={calculateResultClass}
                QnA={QnA}
        />
          
        )}
        <div className="button-container">
          {currentQuestionIndex > 0 && (
            <button onClick={handlePrevClick}>Previous</button>
          )}
          <button onClick={handleNextClick}>
            {quizEnd ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
