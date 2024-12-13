import Modal from "react-modal";
import "../Milestone.css";
import { QuizQuestionType, UpdateQuizRequest } from "../../../types/QuizType";
import axios from "axios";

const MileQuizViewModal = (props: {
  data: QuizQuestionType[] | undefined;
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  quizFinished: boolean;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
  mileQuizPassed: boolean;
  setMileQuizPassed: React.Dispatch<React.SetStateAction<boolean>>;
  quizId: number | undefined;
}) => {
  const quizData = props.data || [];
  // Type guard function

  const handleOptionClick = (selectedOption: number) => {
    const currentQuestion = quizData[props.currentQuestionIndex];
    // Check if the selected option is correct and update the score
    if (selectedOption === currentQuestion?.answer) {
      props.setScore((prev) => prev + 1);
      console.log("current score: " + props.score);
    }

    // Move to the next question or show the results if it's the last question
    if (quizData.length != 0) {
      if (props.currentQuestionIndex + 1 < quizData.length) {
        props.setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        props.setQuizFinished(true);
        if (props.score / (props.currentQuestionIndex + 1) >= 0.75) {
          updateQuiz({
            score: props.score,
            status: true,
          });
          props.setMileQuizPassed(true);
          props.setScore(1);
        } else {
          props.setMileQuizPassed(false);
          props.setScore(1);
        }
        console.log("Final score" + props.score);
      }
    }
  };

  const updateQuiz = async (data: UpdateQuizRequest) => {
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

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      appElement={document.getElementById("root") as HTMLElement}
      className="custom-modal"
    >
      {props.data != undefined ? (
        <>
          <button onClick={props.closeModal}>x</button>
          <div>
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
                      margin: "5px",
                      padding: "10px",
                      display: "block",
                    }}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            {props.quizFinished && (
              <button onClick={props.closeModal}>FinitoMarito</button>
            )}
          </div>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </Modal>
  );
};

export default MileQuizViewModal;
