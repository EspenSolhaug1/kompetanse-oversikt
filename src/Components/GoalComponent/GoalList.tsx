import { useState } from "react";
import GoalItem from "./GoalItem";

const GoalList = () => {
  const [goals, setGoals] = useState([]);
  const userId: string | null = null;

  return (
    <div className="goals">
      {goals.map((goal, index) => {
        return <GoalItem key={index} goal={goal} />;
      })}
    </div>
  );
};

export default GoalList;
