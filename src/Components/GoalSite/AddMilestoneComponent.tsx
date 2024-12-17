import "./Milestone.css";
const AddMilestoneComponent = (props: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  goalId: number | undefined;
}) => {
  const buttonClicked = async () => {
    const milestoneTitle = (
      document.getElementById("milestoneValue") as HTMLInputElement
    ).value;

    if (!milestoneTitle.trim()) {
      alert("Tittel må ha innhold!");
      return;
    }

    const milestoneDescription = (
      document.getElementById("milestoneDescription") as HTMLInputElement
    ).value;

    if (!milestoneDescription.trim()) {
      alert("Beskrivelsen må ha innhold!");
      return;
    }

    const milestone = {
      title: milestoneTitle,
      description: milestoneDescription,
      status: true,
    };

    try {
      props.setLoading(true);
      const response = await fetch(
        `https://localhost:7293/api/milestone/goal/${props.goalId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(milestone),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add milestone. Please try again.");
      }

      window.location.reload();
    } catch (error: any) {
      console.error(error.message);
      alert("Error: " + error.message);
    } finally {
      props.setLoading(false);
    }
  };

  return (
    <div className="addGoalContainer">
      <form className="add-goal-form">
        <input
          type="text"
          id="milestoneValue"
          placeholder="Legg til milepæl..."
          required
        />
        <input
          type="text"
          id="milestoneDescription"
          placeholder="Legg til beskrivelse..."
          required
        />
        <button
          onClick={() => {
            buttonClicked();
          }}
        >
          Legg til
        </button>
      </form>
    </div>
  );
};

export default AddMilestoneComponent;
