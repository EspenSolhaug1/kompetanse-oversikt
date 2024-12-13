import Modal from "react-modal";
import "../Milestone.css";
import { QuizQuestionType } from "../../../types/QuizType";

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
          props.setMileQuizPassed(true);
          console.log(props.score);
          console.log("Quiz passed!!!!!!");
          console.log(props.score / (props.currentQuestionIndex + 1));
          props.setScore(0);
        } else {
          props.setMileQuizPassed(false);
          props.setScore(0);
          console.log(props.score);
          console.log("Quiz faled");
          console.log(props.score / (props.currentQuestionIndex + 1));
        }
        //UPDATE DATABASEN
        console.log("Final score" + props.score);
      }
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
