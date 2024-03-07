import React, { useState, useEffect } from "react";
import { QuizContainer, NavigationWrapper } from "../../styles/QuizStyles";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorage";
import quizData from "../../data/data";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    () => loadFromLocalStorage("quizAnswers") || {}
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    saveToLocalStorage("quizAnswers", selectedAnswers);
  }, [selectedAnswers]);

  const handleOptionChange = (event) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: event.target.value,
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <QuizContainer>
      <h2>{currentQuestion.question}</h2>
      <hr></hr>
      <form>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name={`question-${currentQuestionIndex}`}
              value={option}
              checked={selectedAnswers[currentQuestionIndex] === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </form>

      {selectedAnswers[currentQuestionIndex] !== undefined && (
        <p>You have selected: {selectedAnswers[currentQuestionIndex]}</p>
      )}

      <NavigationWrapper>
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Back
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={currentQuestionIndex === quizData.length - 1}
        >
          Next
        </button>
      </NavigationWrapper>
    </QuizContainer>
  );
};

export default Quiz;
