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
}) => {
  // Type guard function

  const handleOptionClick = (selectedOption: number) => {
    const currentQuestion = props.data?.[props.currentQuestionIndex];

    // Check if the selected option is correct and update the score
    if (selectedOption === currentQuestion?.answer) {
      props.setScore((prev) => prev + 1);
    }

    // Move to the next question or show the results if it's the last question
    if (props.data) {
      if (props.currentQuestionIndex + 1 < props.data.length) {
        props.setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        props.setQuizFinished(true);
        /*
      const passed: boolean =
        props.score / props.currentQuestionIndex + 1 > 0.8;
        */
        // props.setShowResults(true);
        // TODO: QUIZ-FINISHED(bool)
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
      {props.data?.length != 0 ? (
        <>
          <button onClick={props.closeModal}>x</button>
          <div>
            <h2>
              Question {props.currentQuestionIndex + 1} of {props.data?.length}
            </h2>
            <p>{props.data?.[props.currentQuestionIndex].content}</p>
            <div>
              {props.data?.[props.currentQuestionIndex]?.options.map(
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
