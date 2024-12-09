import "./GoalListComponent.css";
import { GoalType } from "../../types/GoalType";
import { useNavigate } from "react-router-dom";

const GoalInstanceProfile = (props: { goal: GoalType; index: number }) => {
  const navigate = useNavigate();

  const goToGoal = () => {
    navigate(`/goals/${props.goal.id}`);
  };

  const hoverColor = props.index % 2 === 0 ? "#606855" : "#4b8176";
  return (
    <div
      className="goalInstanceComponent"
      style={
        {
          background: props.index % 2 === 0 ? "#4b5043" : "#9bc4bc",
          color: props.index % 2 === 0 ? "#e7e9eb" : "inherit",
          "--hover-color": hoverColor, // Add custom property here
        } as React.CSSProperties
      } // Type assertion to avoid TypeScript errors
      onClick={goToGoal}
    >
      <div className="hover">
        <span className="goalTitle">{props.goal.name}</span>
        <span className="difficulty">{"⭐".repeat(props.goal.difficulty)}</span>
      </div>
    </div>
  );
};

export default GoalInstanceProfile;
