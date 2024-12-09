import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";
import MilestoneComponent from "./MilestoneComponent";
import "../../App.css";
import { generateQuiz } from "./QuizService";
import { QuizQuestionType } from "../../types/QuizType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";

const GoalSite: React.FC = () => {
  const { id } = useParams();
  const { userProfile } = useContext(myContext) as myContextType;
  const [quiz, setQuiz] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [numberOfQuestions, setNumberOfQuestions] = useState<string>("");
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleGenerateQuiz = async (title: string, numb: string) => {
    setLoading(true);
    setError("");
    setQuiz([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    try {
      setTopic(title);
      setNumberOfQuestions(numb);
      const quizData = await generateQuiz({ topic, numberOfQuestions });
      setQuiz(quizData);
    } catch (err) {
      setError("Failed to generate quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const goal: GoalType | undefined = userProfile?.goals.find(
    (g: GoalType) => g.id === Number(id)
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = (title: string, numb: string) => {
    handleGenerateQuiz(title, numb);
    setModalOpen(true);
    setQuizFinished(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Bruk Set quiz Finished for lagring?
  };

  const buttonClicked = () => {
    const topicString: string = "";
    if (goal?.milestones.length != undefined) {
      for (let i = 0; i < goal?.milestones.length; i++) {
        if (i != goal.milestones.length - 1) {
          topicString.concat(`${goal.milestones[i].title} &`);
        } else {
          topicString.concat(`${goal.milestones[i].title}`);
        }
      }
    }
    console.log("TopicString = " + topicString);
    setTopic(topicString);
    setNumberOfQuestions(
      "with each topic has 2 questions, so it equals 2 times number of "
    );
  };

  /**
   * 06.des.24
   * Topic og numberofQuestion blir lagt til etter generating
   * Lagt til parameter på openModal, handleGenerate
   * 
   * 
   * Knut foreslår:
   * 
      for (let i = 0; i < goal.milestones.length(); i++) {
        const quizData = await generateQuiz({ milestone.title, "4" });
        setQuiz(quizData);
      }
   */
  return (
    <div className="content-background">
      <div className="col">
        <h1>{goal?.name}</h1>
        <button
          onClick={() => {
            openModal("Knut", "2");
            buttonClicked();
          }}
        >
          Ta Quiz
        </button>
      </div>
      <hr />
      <div className="goalsBox">
        {goal?.milestones.map((milestone, index) => {
          return (
            <MilestoneComponent
              topic={topic}
              setTopic={setTopic}
              numberOfQuestions={numberOfQuestions}
              setNumberOfQuestions={setNumberOfQuestions}
              quiz={quiz}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              score={score}
              setScore={setScore}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
              key={index}
              index={index}
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
        data={goal}
        closeModal={closeModal}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        quiz={quiz}
        score={score}
        setScore={setScore}
        topic={topic}
        quizFinished={quizFinished}
        setQuizFinished={setQuizFinished}
      />
      ;
    </div>
  );
};

export default GoalSite;
