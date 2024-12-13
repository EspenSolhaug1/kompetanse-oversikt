import { useEffect, useState } from "react";
import { MilestoneType } from "../../types/MilestoneType";
import { GenerateQuizRequest, QuizQuestionType } from "../../types/QuizType";
import MileQuizViewModal from "./QuizModal/MileQuizViewModal";

const MilestoneComponent = (props: {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
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
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  //UseEffect for generating quiz if no quiz is available

  useEffect(() => {
    const generateQuizData = async () => {
      console.log("useeffect running");
      setLoading(true);
      let quizData: QuizQuestionType[] | undefined = [];
      try {
        if (
          !props.milestone.quizList.find((q) => !q.status) ||
          props.milestone.quizList.length === 0
        ) {
          quizData = await props.generateQuiz({
            topic: props.milestone.title,
            numberOfQuestions: "4",
            id: props.milestone.id,
          });
        } else {
          quizData = props.milestone.quizList.find((q) => !q.status)?.questions;
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
    setQuizFinished(false);
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
      {!loading && (
        <>
          <MileQuizViewModal
            isOpen={modalOpen}
            onClose={() => closeModal()}
            data={quizDisplayed}
            closeModal={closeModal}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            score={props.score}
            setScore={props.setScore}
            quizFinished={quizFinished}
            setQuizFinished={setQuizFinished}
          />
        </>
      )}
      <button onClick={buttonClicked}>Ta miniquiz</button>
    </div>
  );
};

export default MilestoneComponent;
