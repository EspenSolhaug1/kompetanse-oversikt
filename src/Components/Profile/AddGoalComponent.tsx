import axios from "axios";
import { useContext, useState } from "react";
import { myContext } from "../../App";
import "../GoalProfile/GoalListComponent.css";

const API_URL = "https://localhost:7293/api";

const AddGoalComponent = () => {
  const [goalName, setGoalName] = useState("");
  const [difficulty, setDifficulty] = useState(0); // Default difficulty (0)
  const profileId = useContext(myContext).userProfile?.id;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalName(e.target.value);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(Number(e.target.value)); // Convert value to a number
  };

  const handleSubmit = async (param: React.FormEvent<HTMLFormElement>) => {
    param.preventDefault();

    if (!profileId) {
      console.error("Profile ID is missing.");
      return;
    }

    try {
      await axios.post(`${API_URL}/goal/profile/${profileId}`, {
        name: goalName,
        difficulty, // Correct payload keys
      });
      setGoalName(""); // Clear the input field after submission
      setDifficulty(0); // Reset difficulty to default
    } catch (error) {
      console.error("Error submitting goal:", error);
    }
  };

  return (
    <div className="addGoalContainer">
      <form onSubmit={handleSubmit} className="add-goal-form">
        <input
          name="goalName"
          type="text"
          required
          placeholder="Add a Goal"
          onChange={handleNameChange}
          value={goalName}
        />
        <select
          name="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
          required
        >
          <option value={0}>1 - Easy</option>
          <option value={1}>2 - Medium</option>
          <option value={2}>3 - Hard</option>
        </select>
        <button
          className="add-user-button"
          type="submit"
          disabled={goalName === ""}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em">
            <path
              fillRule="evenodd"
              d="M13.25 2.5H2.75a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25zM2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25V2.75C1 1.784 1.784 1 2.75 1zM8 4a.75.75 0 01.75.75v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5A.75.75 0 018 4z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddGoalComponent;
