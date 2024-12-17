import "./GoalListComponent.css";
import { GoalType } from "../../types/GoalType";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext, myContextType } from "../../App";

const GoalInstanceProfile = (props: { goal: GoalType; index: number }) => {
  const navigate = useNavigate();
  const { handlePageExit } = useContext(myContext) as myContextType;

  const handleButtonClick = () => {
    handlePageExit(goToGoal);
  };
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
      onClick={handleButtonClick}
    >
      <div className="hover">
        <span className="goalTitle">{props.goal.name}</span>
        <span className="difficulty">
          {"⭐".repeat(props.goal.difficulty + 1)}
        </span>
      </div>
    </div>
  );
};

export default GoalInstanceProfile;
