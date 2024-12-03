import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";

const MilestoneComponent = (props: { goal: GoalType; index: number }) => {
  const { userProfile } = useContext(myContext) as myContextType;
  return (
    <div className="col goals ">
      <h2>{props.goal.name}</h2>
      <h2>{props.goal.difficulty}</h2>
    </div>
  );
};

export default MilestoneComponent;
