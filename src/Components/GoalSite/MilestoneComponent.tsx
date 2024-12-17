import { useEffect, useState } from "react";
import { MilestoneType } from "../../types/MilestoneType";
import { GenerateQuizRequest, QuizQuestionType } from "../../types/QuizType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";
import "./Milestone.css";
const MilestoneComponent = (props: {
  milestone: MilestoneType;
  index: number;
  generateQuiz: (data: GenerateQuizRequest) => Promise<QuizQuestionType[]>;
}) => {
  const [quizDisplayed, setQuizDisplayed] = useState<
    QuizQuestionType[] | undefined
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  //Declare modal open state
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  //Check if quiz is passed
  const [mileQuizPassed, setMileQuizPassed] = useState<boolean>(false);
  //Display passed score:
  const [displayScore, setDisplayScore] = useState<number>(0);
  //Check if quiz is finished
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  //Score for each milestone
  const [score, setScore] = useState<number[]>([]);
  //Get the id for the quiz
  const [quizId, setQuizId] = useState<number | undefined>(undefined);
  //Boolean for failed attempt
  const [failedAttempt, setFailedAttempt] = useState<boolean>(false);
  //UseEffect for generating quiz if no quiz is available

  useEffect(() => {
    const generateQuizData = async () => {
      console.log("useeffect running");
      setLoading(true);
      let quizData: QuizQuestionType[] | undefined = [];
      if (!props.milestone.quizList.some((q) => !q.status)) {
        console.log("RUNNING generated");
      }
      try {
        if (props.milestone.quizList.some((q) => q.status && q.score >= 3)) {
          setMileQuizPassed(true);
          const foundQuiz = props.milestone.quizList.find(
            (q) => q.status && q.score >= 3
          );
          if (foundQuiz) {
            setDisplayScore(foundQuiz.score);
          }
        }
        if (
          !props.milestone.quizList.some((q) => !q.status) ||
          props.milestone.quizList.length === 0
        ) {
          quizData = await props.generateQuiz({
            topic: props.milestone.title,
            numberOfQuestions: "4",
            id: props.milestone.id,
          });
        } else {
          quizData = props.milestone.quizList.find((q) => !q.status)?.questions;
          setQuizId(props.milestone.quizList.find((q) => !q.status)?.id);
        }
      } catch (err) {
        console.log("Failed to generate quiz. Please try again.");
        console.log(err);
      } finally {
        console.log("loading done");
        setLoading(false);
      }
      setQuizDisplayed(quizData);
    };
    generateQuizData();
  }, []);

  //Methods for opening and closing the modal
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    // Bruk Set quiz Finished for lagring?
  };

  const buttonClicked = () => {
    openModal();
  };
  const hoverColor = props.index % 2 === 0 ? "#606855" : "#4b8176";

  return (
    <div
      className="goals"
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
      {!loading && (
        <>
          <MileQuizViewModal
            isOpen={modalOpen}
            onClose={() => closeModal()}
            data={quizDisplayed}
            closeModal={closeModal}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            score={score}
            setScore={setScore}
            quizFinished={quizFinished}
            setQuizFinished={setQuizFinished}
            mileQuizPassed={mileQuizPassed}
            setMileQuizPassed={setMileQuizPassed}
            quizId={quizId}
            setFailedAttempt={setFailedAttempt}
            setDisplayScore={setDisplayScore}
            displayScore={displayScore}
          />
          {!mileQuizPassed ? (
            <>
              {failedAttempt && (
                <p className="quiz-fail-msg">Quiz strøket, prøv igjen</p>
              )}
              <button onClick={buttonClicked}>Ta quiz</button>
            </>
          ) : (
            <>
              <p className="quiz-passed-msg">Quiz bestått!</p>
              <p>Din score: {displayScore}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MilestoneComponent;
