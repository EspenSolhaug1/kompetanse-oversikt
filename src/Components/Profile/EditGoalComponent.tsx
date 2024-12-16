import { useState } from "react";
import axios from "axios";
import { GoalType } from "../../types/GoalType";

const API_URL = "https://localhost:7293/api";

const EditGoalComponent = ({
  goal,
  onUpdate,
  onCancel,
}: {
  goal: GoalType;
  onUpdate: (updatedGoal: GoalType) => void;
  onCancel: () => void;
}) => {
  const [name, setName] = useState(goal.name);
  const [difficulty, setDifficulty] = useState(goal.difficulty);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${API_URL}/goal/${goal.id}`, {
        name,
        difficulty,
      });

      // Trigger onUpdate callback with the updated goal
      onUpdate(response.data);

      // Reset state or close the form
      onCancel();
    } catch (error) {
      console.error("Error updating goal:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-goal-form">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Goal Name"
        required
      />
      <select value={difficulty} onChange={handleDifficultyChange} required>
        <option value={0}>1 - Easy</option>
        <option value={1}>2 - Medium</option>
        <option value={2}>3 - Hard</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditGoalComponent;
