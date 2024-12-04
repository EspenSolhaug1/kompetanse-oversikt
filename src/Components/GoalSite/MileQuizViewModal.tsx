import Modal from "react-modal";
import { MilestoneType } from "../../types/MilestoneType";
import "./Milestone.css";

const MileQuizViewModal = (props: {
  milestone: MilestoneType;
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
}) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      appElement={document.getElementById("root") as HTMLElement}
      className="custom-modal"
    >
      <h3>Hello!</h3>
      <button onClick={props.closeModal}>click</button>
    </Modal>
  );
};

export default MileQuizViewModal;
