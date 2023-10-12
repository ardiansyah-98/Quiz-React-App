import QnA from "./Components/QuestionData";
import Score from "./Components/Score";
import React, { useState , useRef} from 'react';
import './App.css';
import Question from "./Components/Question";
import Home from "./Components/Home";
import correctSound from './Sounds/correct.mp3'; 
import wrongSound from './Sounds/wrong.mp3'; 


function App() {
  
  const audioRef = useRef();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentScore, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizEnd,setQuizEnd]= useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  //const [reset,Quizreset]= useState(false);

  const handlePlayNowClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizEnd(false);
    setQuizStarted(true);
  };

 
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    checkAnswer(option);
    changeBackgroundColor(option);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < QnA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setQuizEnd(false);
      changeBackgroundColor(false);
    } else {
      setShowResults(true);
      setQuizEnd(true);
      //setScore(0);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setShowResults(false);
    }else{
      //setScore(0);
      //setCurrentQuestionIndex(0);
    }

  };

  var calculateResultClass = (option) => {
    if (quizEnd) {
      if (option === QnA[currentQuestionIndex].answer) {
        setScore(currentScore + 1);        
        return 'correct';
      } else if (option === selectedOption) {
        return 'incorrect';
      }
    }
    return '';
  };

 var checkAnswer = (option) => {
  var isCorrect= option === QnA[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore(currentScore + 1);
      playSoundEffect(isCorrect);
      changeBackgroundColor(isCorrect);        
      return currentScore;
    }else{
      playSoundEffect(!1);
      changeBackgroundColor(!1);
    }
         };

  const playSoundEffect = (isCorrect) => {
  
    const soundToPlay = isCorrect ? correctSound : wrongSound;
    audioRef.current.src = soundToPlay;
    audioRef.current.play();
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    //Quizreset(true);
    console.log(currentQuestionIndex);
    window.location.reload(true);
          
        };

  const homeQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
     
          
        };

  const changeBackgroundColor = (isCorrect) => {
    const questionList = document.querySelectorAll('.question-container li');
    
      // Clear the background color for all options
      questionList.forEach((option) => {
          option.style.backgroundColor = '';
      });
        
          if (isCorrect) {
            questionList.forEach((option) => {
              if (option.textContent === QnA[currentQuestionIndex].answer) {
                option.style.backgroundColor = 'lightgreen';
              }
            });
          } 
  };
        
  const startQuiz = () => {
    setQuizStarted(true);
  };            

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="question-container">
      <audio ref={audioRef}></audio>
       {quizStarted ? (
        quizEnd ? (
                  
                  <Score
                        score={currentScore}
                         className="score"
                         tryagain={resetQuiz}
                         finish={homeQuiz}
                         currentQuestionIndex={currentQuestionIndex+1}

                    />
        ) : (
          <Question
            currentQuestionIndex={currentQuestionIndex}
            handleOptionClick={handleOptionClick}
            calculateResultClass={calculateResultClass}
            QnA={QnA}
            prevClick={handlePrevClick}
            nextClick={handleNextClick}
            selectedOption={selectedOption}
          />
        )
      ) : (
        <Home startQuiz={startQuiz} playNow={handlePlayNowClick} />
      )}
        
      </div>
    </div>
  );
}

export default App;
