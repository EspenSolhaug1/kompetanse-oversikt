import { useContext, useState } from "react";
import GoalItem from "./GoalItem";
import { myContextType, myContext } from "../../App";

const GoalList = () => {
  const { currentUser } = useContext(myContext) as myContextType;

  return (
    <div className="goals">
      {currentUser?.goals.map((goal, index) => {
        return <GoalItem key={index} goal={goal} />;
      })}
    </div>
  );
};

export default GoalList;
