import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";
import MilestoneComponent from "./MilestoneComponent";
import "../../App.css";
import { generateQuiz } from "./QuizService";
import axios from "axios";
import { MilestoneType } from "../../types/MilestoneType";
import AddMilestoneComponent from "./AddMilestoneComponent";

const GoalSite: React.FC = () => {
  const { id } = useParams();
  const { userProfile } = useContext(myContext) as myContextType;
  const [loading, setLoading] = useState<boolean>(true);
  const [loadGoal, setLoadGoal] = useState<boolean>(true);
  const [theGoal, setTheGoal] = useState<GoalType | undefined>(undefined);
  const [milestoneListObj, setMilestoneListObj] = useState<
    MilestoneType[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchGoal = async () => {
      setLoadGoal(true);
      try {
        const response = await axios.get<GoalType>(
          `https://localhost:7293/api/goal/${Number(id)}`
        );
        setTheGoal(response.data);
      } catch (error) {
        console.error("Failed to fetch user goal:", error);
      }
      setLoadGoal(false);
    };

    if (userProfile?.goalList) {
      fetchGoal();
    }
  }, [userProfile, id]);

  /*
      if goal: 
      "with each topic has 2 questions, so it equals 2 times number of "
   */
  useEffect(() => {
    if (theGoal != undefined) {
      setMilestoneListObj(theGoal.milestoneList);
    }
  }, [theGoal]);

  return (
    <div className="content-background">
      {loadGoal ? (
        <p>loading</p>
      ) : (
        <>
          <div className="col">
            <h1>{theGoal?.name}</h1>
            <button>Ta Final Quiz</button>
          </div>
          <AddMilestoneComponent
            setLoading={setLoading}
            loading={loading}
            index={2}
            goalId={Number(id)}
          />
          <hr />
          <div className="goalsBox">
            {milestoneListObj?.map((milestone, index) => {
              return (
                <MilestoneComponent
                  generateQuiz={generateQuiz}
                  key={index}
                  index={index}
                  milestone={milestone}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default GoalSite;
