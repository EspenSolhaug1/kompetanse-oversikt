import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import GoalInstanceProfile from "./GoalInstanceProfileComponent";
import "./GoalListComponent.css";

const GoalListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  return (
    <div className="goals">
      <h2>Mine mål</h2>
      <div className="goalsBox">
        {userProfile?.goals.map((goal, index) => {
          return <GoalInstanceProfile key={index} goal={goal} index={index} />;
        })}
      </div>
    </div>
  );
};

export default GoalListProfileComponent;
