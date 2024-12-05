import { useContext, useState } from "react";
import { myContext, myContextType } from "../../App";
import { MilestoneType } from "../../types/MilestoneType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";
import { GoalType } from "../../types/GoalType";

const MilestoneComponent = (props: {
  milestone: MilestoneType;
  index: number;
}) => {
  const { userProfile } = useContext(myContext) as myContextType;
  //Modal for quiz
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    console.log(props.milestone);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="col goals ">
      <h2>{props.milestone.title}</h2>
      <h3>{props.milestone.description}</h3>
      <MileQuizViewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        milestone={props.milestone}
        closeModal={closeModal}
      />
      <button onClick={openModal}>Ta miniquiz</button>
    </div>
  );
};

export default MilestoneComponent;
