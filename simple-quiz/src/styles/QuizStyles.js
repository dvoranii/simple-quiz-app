import styled from "styled-components";

export const QuizContainer = styled.div`
  width: 640px;
  margin: 150px auto;
  background-color: lightblue;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  padding: 40px 50px;
  border: 1px solid black;

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  h2 {
    color: black;
    text-align: center;
  }

  input[type="radio"]:checked + label {
    background-color: #4caf50;
    color: white;
  }

  input[type="radio"] + label {
    transition: all 150ms ease;
    width: 100%;
  }

  input[type="radio"] + label:hover {
    background: grey;
    cursor: pointer;
  }
`;
export default QuizContainer;
