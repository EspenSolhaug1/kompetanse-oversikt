import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";
import MilestoneComponent from "./MilestoneComponent";
import "../../App.css";
import { generateQuiz } from "./QuizService";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";
import axios from "axios";
import { MilestoneType } from "../../types/MilestoneType";

const GoalSite: React.FC = () => {
  const { id } = useParams();
  const { userProfile } = useContext(myContext) as myContextType;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  //const [goal, setGoal] = useState<GoalType | undefined>(undefined);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [theGoal, setTheGoal] = useState<GoalType | undefined>(undefined);
  const [milestoneListObj, setMilestoneListObj] = useState<
    MilestoneType[] | undefined
  >(undefined);

  //Declare modal open state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const response = await axios.get<GoalType>(
          `https://localhost:7293/api/goal/${Number(id)}`
        );
        setTheGoal(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    if (userProfile?.goalList) {
      fetchGoal();
    }
  }, [userProfile, id]);

  //Methods for opening and closing the modal
  const openModal = () => {
    setModalOpen(true);
    setQuizFinished(false);
  };
  const closeModal = () => {
    setModalOpen(false);
    // Bruk Set quiz Finished for lagring?
  };

  /*
      if goal: 
      "with each topic has 2 questions, so it equals 2 times number of "
   */
  useEffect(() => {
    if (theGoal != undefined) {
      setMilestoneListObj(theGoal.milestoneList);
      // console.log(milestoneListObj);
    }
  }, [theGoal]);

  return (
    <div className="content-background">
      <div className="col">
        <h1>{theGoal?.name}</h1>
        <button
          onClick={() => {
            openModal();
          }}
        >
          Ta Quiz
        </button>
      </div>
      <hr />
      <div className="goalsBox">
        {milestoneListObj &&
          milestoneListObj.map((milestone, index) => {
            return (
              <MilestoneComponent
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                score={score}
                setScore={setScore}
                key={index}
                index={index}
                milestone={milestone}
                openModal={openModal}
                closeModal={closeModal}
                modalOpen={modalOpen}
                quizFinished={quizFinished}
                setQuizFinished={setQuizFinished}
                generateQuiz={generateQuiz}
                setLoading={setLoading}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GoalSite;
