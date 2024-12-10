import { MilestoneType } from "../../types/MilestoneType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";
import { QuizQuestionType } from "../../types/QuizType";

const MilestoneComponent = (props: {
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  numberOfQuestions: string;
  setNumberOfQuestions: React.Dispatch<React.SetStateAction<string>>;
  quiz: QuizQuestionType[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  openModal: (title: string, numb: string) => void;
  closeModal: () => void;
  modalOpen: boolean;
  quizFinished: boolean;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;

  milestone: MilestoneType;
  index: number;
}) => {
  const buttonClicked = () => {
    props.openModal(props.milestone.title, "4");
    console.log("quiz" + props.quiz);
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
        quiz={props.quiz}
        score={props.score}
        setScore={props.setScore}
        topic={props.topic}
        quizFinished={props.quizFinished}
        setQuizFinished={props.setQuizFinished}
      />
      <button onClick={buttonClicked} disabled={props.loading}>
        {props.loading ? "Generating..." : "Ta miniquiz"}
      </button>
    </div>
  );
};

export default MilestoneComponent;
