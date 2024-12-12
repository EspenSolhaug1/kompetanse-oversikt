import { MilestoneType } from "../../types/MilestoneType";
import { QuizQuestionType } from "../../types/QuizType";

const AddMilestoneComponent = (props: {
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  numberOfQuestions: string;
  setNumberOfQuestions: React.Dispatch<React.SetStateAction<string>>;
  quiz: QuizQuestionType[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  openModal: (title: string, numb: string) => void;
  closeModal: () => void;
  modalOpen: boolean;
  quizFinished: boolean;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
  milestone: MilestoneType;
  index: number;
  goalId: string; // Added to specify the goal ID
}) => {
  const buttonClicked = async () => {
    const milestoneTitle = (document.getElementById("milestoneValue") as HTMLInputElement).value;

    if (!milestoneTitle.trim()) {
      alert("Milestone title cannot be empty!");
      return;
    }

    const milestone = {
      title: milestoneTitle,
      description: "This is a new milestone", // Adjust as needed
      status: true,
    };

    try {
      props.setLoading(true);
      const response = await fetch(`https://localhost:7293/api/milestone/goal/${1}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(milestone),
      });

      if (!response.ok) {
        throw new Error("Failed to add milestone. Please try again.");
      }

      alert("Milestone added successfully!");
      console.log(await response.json());
    } catch (error: any) {
      console.error(error.message);
      alert("Error: " + error.message);
    } finally {
      props.setLoading(false);
    }
  };

  const hoverColor = props.index % 2 === 0 ? "#606855" : "#4b8176";

  return (
    <div
      className="col goals"
      style={
        {
          background: props.index % 2 === 0 ? "#4b5043" : "#9bc4bc",
          color: props.index % 2 === 0 ? "#e7e9eb" : "inherit",
          "--hover-color": hoverColor,
        } as React.CSSProperties
      }
    >
      <div className="addMilestoneDiv" style={{ display: "flex" }}>
        <input
          type="text"
          id="milestoneValue"
          placeholder="Add a Milestone..."
          style={{
            backgroundColor: "#9bc4bc",
            borderColor: "#9bc4bc",
            height: "100px",
            width: "550px",
            color: "black",
            border: "15%",
            fontSize: "40px",
          }}
        />
        <button
          onClick={() => {
            buttonClicked();
          }}
        >
          Add Milestone
        </button>
      </div>
    </div>
  );
};

export default AddMilestoneComponent;
