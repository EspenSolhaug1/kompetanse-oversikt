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
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m 11 2 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 4 4 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -4 4 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 s -0.390625 -1.023437 0 -1.414062 l 2.292969 -2.292969 h -8.585938 c -1.117188 0 -2 0.882812 -2 2 s 0.882812 2 2 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 c -2.195312 0 -4 -1.800781 -4 -4 s 1.804688 -4 4 -4 h 8.585938 l -2.292969 -2.292969 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0"
              fill="#2e3436"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddGoalComponent;
