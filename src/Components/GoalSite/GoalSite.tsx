import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";
import MilestoneComponent from "./MilestoneComponent";
import "../../App.css";
import { generateQuiz } from "./QuizService";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";

const GoalSite: React.FC = () => {
  const { id } = useParams();
  const { userProfile } = useContext(myContext) as myContextType;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  //const [goal, setGoal] = useState<GoalType | undefined>(undefined);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [theGoal, setTheGoal] = useState<GoalType | undefined>(undefined);

  //Declare modal open state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("useeffect ONE triggered");
    // Find the goal when userProfile or id changes
    if (userProfile?.goalList) {
      const goal = userProfile.goalList.find(
        (g: GoalType) => g.id === Number(id)
      );
      setTheGoal(goal);
    }
  }, [userProfile, id]);

  useEffect(() => {
    //Her må sjekkast
    /*
    ****TODOO: 
    sjekk om vi skal bruke "isGoal" "isMilestone" istedet for "data: Goaltype | MileStone"
    Og sette condition for om det er goal eller milestone
    VELDIG NÆRME
    */
    console.log("useeffect 2 triggered");

    console.log("Goal name " + theGoal?.name);
    const fetchQuizData = () => {
      if (!theGoal?.milestoneList) return;

      try {
        // Create a copy of the milestones to avoid mutating props directly

        for (let i = 0; i < theGoal.milestoneList.length; i++) {
          const milestone = { ...theGoal.milestoneList[i] };
          if (milestone.quizList.length === 0) {
            milestone.quizList.forEach(async (element) => {
              if (!element.status || element.questions.length != 0) {
                await generateQuiz({
                  topic: milestone.title, 
                  numberOfQuestions: "4",
                });
              }
            });
          }
        }
      } catch (err) {
        console.log("Failed to generate quiz. Please try again.");
      } finally {
        setLoading(false);
        console.log("loading done");
      }
    };

    fetchQuizData();
  }, [theGoal]);

  //Methods for opening and closing the modal
  const openModal = () => {
    setModalOpen(true);
    setQuizFinished(false);
  };
  const closeModal = () => {
    setModalOpen(false);
    // Bruk Set quiz Finished for lagring?
  };

  /**
   * 06.des.24
   * Topic og numberofQuestion blir lagt til etter generating
   * Lagt til parameter på openModal, handleGenerate
   * 
   * 
   * Knut foreslår:
   * 
   * inni handleGenerateQuiz (eller istedenfor?), lag en const som kjører når siden blir loada   * 
   * (hvis milestone har tom quiz[] kjør, hvis ikke, hent)
   * 
      for (let i = 0; i < goal.milestones.length(); i++) {
        const quizData = await generateQuiz({ milestone.title, "4" });
        setQuiz(quizData);
      }
      if goal: 
      "with each topic has 2 questions, so it equals 2 times number of "
   */

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
        {theGoal?.milestoneList?.map((milestone, index) => {
          return (
            <MilestoneComponent
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              score={score}
              setScore={setScore}
              key={index}
              milestone={milestone}
              openModal={openModal}
              closeModal={closeModal}
              modalOpen={modalOpen}
              quizFinished={quizFinished}
              setQuizFinished={setQuizFinished}
            />
          );
        })}
      </div>
      <MileQuizViewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={theGoal}
        closeModal={closeModal}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        score={score}
        setScore={setScore}
        quizFinished={quizFinished}
        setQuizFinished={setQuizFinished}
      />
      ;
    </div>
  );
};

export default GoalSite;
