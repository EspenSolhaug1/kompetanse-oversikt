import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";
import MilestoneComponent from "./MilestoneComponent";
import "../../App.css";

const GoalSite: React.FC = () => {
  const { id } = useParams();
  const { userProfile } = useContext(myContext) as myContextType;
  const goal: GoalType | undefined = userProfile?.goals.find(
    (g: GoalType) => g.id === Number(id)
  );
  return (
    <div className="content-background">
      <div className="col">
        <h1>{goal?.name}</h1>
        <button>Ta Quiz</button>
      </div>
      <hr />
      <div className="goalsBox">
        {goal?.milestones.map((milestone, index) => {
          return <MilestoneComponent key={index} index={index} milestone={milestone} />;
        })}
      </div>
    </div>
  );
};

export default GoalSite;
