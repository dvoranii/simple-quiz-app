import React, { useState } from "react";
import { QuizContainer } from "../../styles/QuizStyles";
// import { isRadioSelected } from "../utils/radioUtils";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <QuizContainer>
      <h2>Question 1</h2>
      <hr></hr>
      <form>
        <div>
          <input
            type="radio"
            id="answer1"
            name="question1"
            value="Answer 1"
            onChange={handleOptionChange}
          />
          <label htmlFor="answer1">Answer 1</label>
        </div>
        <div>
          <input
            type="radio"
            id="answer2"
            name="question1"
            value="Answer 2"
            onChange={handleOptionChange}
          />
          <label htmlFor="answer2">Answer 2</label>
        </div>
        <div>
          <input
            type="radio"
            id="answer3"
            name="question1"
            value="Answer 3"
            onChange={handleOptionChange}
          />
          <label htmlFor="answer3">Answer 3</label>
        </div>
        <div>
          <input
            type="radio"
            id="answer4"
            name="question1"
            value="Answer 4"
            onChange={handleOptionChange}
          />
          <label htmlFor="answer4">Answer 4</label>
        </div>
      </form>
      {/* Displaying the selected option */}
      {selectedOption && <p>You have selected: {selectedOption}</p>}
    </QuizContainer>
  );
};

export default Quiz;
