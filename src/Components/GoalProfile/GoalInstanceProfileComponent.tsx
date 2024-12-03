import "./GoalListComponent.css";
import { GoalType } from "../../types/GoalType";

const GoalInstanceProfile = (props: { goal: GoalType; index: number }) => {
  return (
    <div
      className="goalInstanceComponent"
      style={
        props.index % 2 === 0
          ? { background: "#4b5043", color: "#ffffff" }
          : { background: "#9bc4bc", color: "#090909" }
      }
    >
      <div className="hover">
        <span className="goalTitle">{props.goal.name}</span>
        <span className="difficulty">{"⭐".repeat(props.goal.difficulty)}</span>
      </div>
    </div>
  );
};

export default GoalInstanceProfile;
