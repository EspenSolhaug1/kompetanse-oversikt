import { useContext, useState } from "react";
import { myContext, myContextType } from "../../App";
import GoalInstanceProfile from "./GoalInstanceProfileComponent";
import "./GoalListComponent.css";
import AddGoalComponent from "../Profile/AddGoalComponent";

const GoalListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  const [goals] = useState(userProfile?.goalList || []);
  return (
    <div className="goals">
      <h3>Mine mål</h3>
      <div className="goalsBox">
        <AddGoalComponent />
        {goals.map((goal, index) => (
          <GoalInstanceProfile key={index} goal={goal} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GoalListProfileComponent;
