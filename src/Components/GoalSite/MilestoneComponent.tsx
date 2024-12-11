import { MilestoneType } from "../../types/MilestoneType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";

const MilestoneComponent = (props: {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  openModal: () => void;
  closeModal: () => void;
  modalOpen: boolean;
  quizFinished: boolean;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
  milestone: MilestoneType;
}) => {
  const buttonClicked = () => {
    props.openModal();
  };
  const hoverColor = props.index % 2 === 0 ? "#606855" : "#4b8176";

  return (
    <div
      className="col goals"
      style={
        {
          background: props.index % 2 === 0 ? "#4b5043" : "#9bc4bc",
          color: props.index % 2 === 0 ? "#e7e9eb" : "inherit",
          "--hover-color": hoverColor, // Add custom property here
        } as React.CSSProperties
      }
    >
      <h2>{props.milestone.title}</h2>
      <h3>{props.milestone.description}</h3>
      <MileQuizViewModal
        isOpen={props.modalOpen}
        onClose={() => props.closeModal()}
        data={props.milestone}
        closeModal={props.closeModal}
        currentQuestionIndex={props.currentQuestionIndex}
        setCurrentQuestionIndex={props.setCurrentQuestionIndex}
        score={props.score}
        setScore={props.setScore}
        quizFinished={props.quizFinished}
        setQuizFinished={props.setQuizFinished}
      />
      <button onClick={buttonClicked}>Ta miniquiz</button>
    </div>
  );
};

export default MilestoneComponent;
