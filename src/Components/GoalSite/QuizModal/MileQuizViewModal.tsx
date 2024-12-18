import Modal from "react-modal";
import "../Milestone.css";
import { QuizQuestionType } from "../../../types/QuizType";
import { useState } from "react";

const MileQuizViewModal = (props: {
  data: QuizQuestionType[] | undefined;
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number[];
  setScore: React.Dispatch<React.SetStateAction<number[]>>;
  quizFinished: boolean;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
  mileQuizPassed: boolean;
  setMileQuizPassed: React.Dispatch<React.SetStateAction<boolean>>;
  quizId: number | undefined;
  setFailedAttempt: React.Dispatch<React.SetStateAction<boolean>>;
  displayScore: number;
  setDisplayScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const quizData = props.data || [];

  const handleOptionClick = (selectedOption: number) => {
    //Set selected option based on chosen answer:
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      updatedOptions[props.currentQuestionIndex] = selectedOption;
      return updatedOptions;
    });
    //Set the score
    props.setScore((prevScore) => {
      const updatedScore = [...prevScore];
      const currentQuestion = quizData[props.currentQuestionIndex];

      // Update the score for the current question
      if (selectedOption === currentQuestion?.answer) {
        // Correct answer
        updatedScore[props.currentQuestionIndex] = 1;
      } else {
        // Incorrect answer
        updatedScore[props.currentQuestionIndex] = 0;
      }
      return updatedScore;
    });
    // Move to the next question or show the results if it's the last question
    if (quizData.length != 0) {
      if (props.currentQuestionIndex + 1 < quizData.length) {
        //props.setCurrentQuestionIndex((prev) => prev + 1);
        console.log("yo");
      } else {
        const sum = props.score.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        if (sum / (props.currentQuestionIndex + 1) >= 0.75) {
          props.setMileQuizPassed(true);
          props.setDisplayScore(sum + 1);
        } else {
          props.setMileQuizPassed(false);
        }
        props.setQuizFinished(true);
      }
    }
  };

  const updateQuiz = async (score: number) => {
    //Reset the quiz if the score is too low after submitting
    if (score / (props.currentQuestionIndex + 1) < 0.75) {
      props.setCurrentQuestionIndex(0);
      props.setScore([]);
      props.setFailedAttempt(true);
      props.setQuizFinished(false);
      setSelectedOptions([]);
      return;
    }
    //Set quiz passed and update the quiz
    props.setFailedAttempt(false);
    props.setMileQuizPassed(true);
    const data = {
      score: score,
      status: true,
    };
    try {
      const response = await fetch(
        `https://localhost:7293/api/quizq/${props.quizId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("quiz updated successfully: ", props.quizId);
      } else {
        console.error("Failed to update quiz", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //Method to swap between the questions
  const swapQuestion = (index: number) => {
    props.setCurrentQuestionIndex(index);
  };
  //Method for going back in the quiz
  const handlePrevQst = () => {
    if (props.currentQuestionIndex > 0) {
      const nextIndex = props.currentQuestionIndex - 1;
      props.setCurrentQuestionIndex(nextIndex);
    } else {
      return;
    }
  };
  //Method for going forward in the quiz
  const handleNextQst = () => {
    if (props.currentQuestionIndex + 1 < quizData.length) {
      const nextIndex = props.currentQuestionIndex + 1;
      props.setCurrentQuestionIndex(nextIndex);
    } else {
      return;
    }
  };

  const btnColor = "#add8e6";
  const btnSubmit = "#5d43bb";
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      appElement={document.getElementById("root") as HTMLElement}
      className="custom-modal"
    >
      {props.data != undefined ? (
        <>
          <div className="topInfo">
            <button className="closeModalBtn" onClick={props.closeModal}>
              X
            </button>
          </div>
          <div className="a">
            <div className="quiz-content">
              <h2>
                Question {props.currentQuestionIndex + 1} of {quizData.length}
              </h2>

              <p>{quizData[props.currentQuestionIndex].content}</p>
              <div>
                {quizData[props.currentQuestionIndex]?.options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(index)}
                      style={{
                        margin: "0 5px",
                        padding: "10px",
                        display: "block",
                        border: "1px solid black",
                        borderRadius: "50px",
                        width: "500px",
                        textAlign: "left",
                        backgroundColor:
                          selectedOptions[props.currentQuestionIndex] === index
                            ? "lightblue"
                            : "white",
                        color:
                          selectedOptions[props.currentQuestionIndex] === index
                            ? "black"
                            : "black",
                      }}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
              <div className="quizBottomDiv">
                <button className="quizBtnDir" onClick={handlePrevQst}>
                  <svg
                    viewBox="0 0 512 512"
                    fill="#add8e6"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={10}
                    height="3em"
                    width="3em"
                  >
                    <path d="M109.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                  </svg>
                </button>
                <button className="quizBtnDir" onClick={handleNextQst}>
                  <svg
                    viewBox="0 0 512 512"
                    fill="#add8e6"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={10}
                    height="3em"
                    width="3em"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </button>
                <div className="quizDir">
                  <button
                    className="quizBtn"
                    onClick={() => swapQuestion(0)}
                    style={{
                      background:
                        props.score[0] == undefined ? "gray" : btnColor,
                      color: props.score[0] == undefined ? "white" : "black",
                    }}
                  >
                    1
                  </button>
                  <button
                    className="quizBtn"
                    onClick={() => swapQuestion(1)}
                    style={{
                      background:
                        props.score[1] == undefined ? "gray" : btnColor,
                      color: props.score[1] == undefined ? "white" : "black",
                    }}
                  >
                    2
                  </button>
                  <button
                    className="quizBtn"
                    onClick={() => swapQuestion(2)}
                    style={{
                      background:
                        props.score[2] == undefined ? "gray" : btnColor,
                      color: props.score[2] == undefined ? "white" : "black",
                    }}
                  >
                    3
                  </button>
                  <button
                    className="quizBtn"
                    onClick={() => swapQuestion(3)}
                    style={{
                      background:
                        props.score[3] == undefined ? "gray" : btnColor,
                      color: props.score[3] == undefined ? "white" : "black",
                    }}
                  >
                    4
                  </button>

                  {props.quizFinished && (
                    <button
                      className="quizSubmitBtn"
                      onClick={() => {
                        props.closeModal();
                        updateQuiz(
                          props.score.reduce((acc, curr) => acc + curr, 0)
                        );
                      }}
                      style={{
                        background:
                          props.score.length == 0 ? "gray" : btnSubmit,
                      }}
                    >
                      Send svar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </Modal>
  );
};

export default MileQuizViewModal;
