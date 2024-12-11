import Modal from "react-modal";
import { MilestoneType } from "../../../types/MilestoneType";
import "../Milestone.css";
import { GoalType } from "../../../types/GoalType";
import { MileQuizType, QuizQuestionType } from "../../../types/QuizType";

const MileQuizViewModal = (props: {
  data: MilestoneType | GoalType | undefined;
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

  console.log("quizz");
  console.log(props.data);

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion =
      props.data?.quizList[0].questions[props.currentQuestionIndex];

    // converts the letter to ASCII code, i.e "A" = 1
    const letterPosition = selectedOption.charCodeAt(1) - 96;
    // Check if the selected option is correct and update the score
    if (letterPosition === currentQuestion?.answer) {
      props.setScore((prev) => prev + 1);
    }

    // Move to the next question or show the results if it's the last question
    if (props.data) {
      if (
        props.currentQuestionIndex + 1 <
        props.data.quizList[0].questions.length
      ) {
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
      {props.data?.quizList[0]?.questions.length != 0 ? (
        <>
          <button onClick={props.closeModal}>x</button>
          <div>
            <h2>
              Question {props.currentQuestionIndex + 1} of{" "}
              {props.data?.quizList[0]?.questions.length}
            </h2>
            <p>
              {
                props.data?.quizList[0].questions[props.currentQuestionIndex]
                  .question
              }
            </p>
            <div>
              {Object.entries(
                props.data?.quizList[0]?.questions[props.currentQuestionIndex]
                  ?.options || {}
              ).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleOptionClick(key)}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    display: "block",
                  }}
                >
                  {value}
                </button>
              ))}
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
