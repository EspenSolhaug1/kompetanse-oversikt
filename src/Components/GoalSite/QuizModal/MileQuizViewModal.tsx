import Modal from "react-modal";
import { MilestoneType } from "../../../types/MilestoneType";
import "../Milestone.css";
import QuestionListComponent from "./QuestionListComponent";

const MileQuizViewModal = (props: {
  milestone: MilestoneType;
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
}) => {
  /*
  const [mileQuiz, setMileQuiz] = useState<MileQuizType[] | undefined>(
    undefined
  );

  useEffect(() => {
    setMileQuiz(MockMileQuizData);
  }, []);
  */

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      appElement={document.getElementById("root") as HTMLElement}
      className="custom-modal"
    >
      <h3>Hello!</h3>
      <QuestionListComponent questions={props.milestone.quiz.questions} />
      <button onClick={props.closeModal}>click!</button>
    </Modal>
  );
};

export default MileQuizViewModal;
