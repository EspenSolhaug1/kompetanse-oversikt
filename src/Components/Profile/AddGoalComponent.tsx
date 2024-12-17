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
          ✅
        </button>
      </form>
    </div>
  );
};

export default AddGoalComponent;
