import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import GoalInstanceProfile from "./GoalInstanceProfileComponent";
import "./GoalListComponent.css";

const GoalListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  return (
    <div className="goals">
      <h3>Mine mål</h3>
      <div className="goalsBox">
        {userProfile?.goalList.map((goal, index) => {
          return <GoalInstanceProfile key={index} goal={goal} index={index} />;
        })}
      </div>
    </div>
  );
};

export default GoalListProfileComponent;
