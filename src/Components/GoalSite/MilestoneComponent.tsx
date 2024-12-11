import { useEffect, useRef, useState } from "react";
import { MilestoneType } from "../../types/MilestoneType";
import {
  GenerateQuizRequest,
  MileQuizType,
  QuizQuestionType,
} from "../../types/QuizType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";

const MilestoneComponent = (props: {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  openModal: () => void;
  closeModal: () => void;
  modalOpen: boolean;
  quizFinished: boolean;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
  milestone: MilestoneType;
  index: number;
  generateQuiz: (data: GenerateQuizRequest) => Promise<QuizQuestionType[]>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const generateQuizData = async () => {
      console.log(props.milestone);
      if (!props.milestone) return;

      try {
        // Create a copy of the milestones to avoid mutating props directly

        if (!props.milestone.quizList.find((q) => !q.status)) {
          const quiz: QuizQuestionType[] = await props.generateQuiz({
            topic: props.milestone.title,
            numberOfQuestions: "4",
            //refresh page (eller loading - Espen 2024)
          });

          //displayedQuiz.current!.questions = quiz;
        } else {
          // was displayedQuiz
        }
      } catch (err) {
        console.log("Failed to generate quiz. Please try again.");
        console.log(err);
      } finally {
        props.setLoading(false);
        console.log("loading done");
      }
    };

    if (props.milestone.quizList.length === 0) {
      generateQuizData();
    }
    //console.log(displayedQuiz);
  }, [props]);
  const buttonClicked = () => {
    props.openModal();
  };
  const hoverColor = props.index % 2 === 0 ? "#606855" : "#4b8176";

  return (
    <div
      className="col goals"
      style={
        {
          background: props.index % 2 === 0 ? "#4b5043" : "#9bc4bc",
          color: props.index % 2 === 0 ? "#e7e9eb" : "inherit",
          "--hover-color": hoverColor, // Add custom property here
        } as React.CSSProperties
      }
    >
      <h2>{props.milestone.title}</h2>
      <h3>{props.milestone.description}</h3>
      {props.milestone.quizList.length != 0 ? (
        <MileQuizViewModal
          isOpen={props.modalOpen}
          onClose={() => props.closeModal()}
          data={props.milestone.quizList[1].questions}
          closeModal={props.closeModal}
          currentQuestionIndex={props.currentQuestionIndex}
          setCurrentQuestionIndex={props.setCurrentQuestionIndex}
          score={props.score}
          setScore={props.setScore}
          quizFinished={props.quizFinished}
          setQuizFinished={props.setQuizFinished}
        />
      ) : (
        <h2>Loading</h2>
      )}
      <button onClick={buttonClicked}>Ta miniquiz</button>
    </div>
  );
};

export default MilestoneComponent;
