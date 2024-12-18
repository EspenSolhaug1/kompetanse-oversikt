import { SkillType } from "../../types/UserType";
import axios from "axios";

const API_URL = "https://localhost:7293/api";

const SkillInstanceProfile = (props: {
  skill: SkillType;
  onDelete: (id: number) => void;
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/skill/${props.skill.id}`);
      props.onDelete(props.skill.id); // Update the list in the parent component
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="skill-card">
      <button className="delete-button" onClick={handleDelete}>
        &times;
      </button>
      <span>{props.skill.name}</span>
    </div>
  );
};

export default SkillInstanceProfile;
