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

  const hoverColor =
    props.index % 2 === 0
      ? "var(--second-item-in-list-hover)"
      : "var(--first-item-in-list-hover)";
  return (
    <div
      className="goalInstanceComponent"
      style={
        {
          background:
            props.index % 2 === 0
              ? "var(--second-item-in-list)"
              : "var(--first-item-in-list)",
          color: props.index % 2 === 0 ? "var(--font-white)" : "inherit",
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
