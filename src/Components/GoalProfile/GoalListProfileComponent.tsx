import { useContext, useState } from "react";
import { myContext, myContextType } from "../../App";
import GoalInstanceProfile from "./GoalInstanceProfileComponent";
import "./GoalListComponent.css";
import AddGoalComponent from "../Profile/AddGoalComponent";
import { GoalType } from "../../types/GoalType";

const GoalListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  const [goals, setGoals] = useState(userProfile?.goalList || []);

  const handleUpdate = (updatedGoal: GoalType) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
    );
  };

  return (
    <div className="goals">
      <h3>Mine mål</h3>
      <div className="goalsBox">
        {goals.map((goal, index) => (
          <GoalInstanceProfile
            key={index}
            goal={goal}
            index={index}
            onUpdate={handleUpdate}
          />
        ))}
        <AddGoalComponent />
      </div>
    </div>
  );
};

export default GoalListProfileComponent;
