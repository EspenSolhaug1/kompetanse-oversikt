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
      alert("Milestone title cannot be empty!");
      return;
    }

    const milestone = {
      title: milestoneTitle,
      description: "This is a new milestone",
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

  const hoverColor = props.index % 2 === 0 ? "#606855" : "#4b8176";

  return (
    <div
      className="goals"
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
