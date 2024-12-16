import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import { GoalType } from "../../types/GoalType";
import MilestoneComponent from "./MilestoneComponent";
import "../../App.css";
import { generateQuiz } from "./QuizService";
import axios from "axios";
import { MilestoneType } from "../../types/MilestoneType";
import AddMilestoneComponent from "./AddMilestoneComponent";

const GoalSite: React.FC = () => {
  const { id } = useParams();
  const { userProfile } = useContext(myContext) as myContextType;

  const [loading, setLoading] = useState<boolean>(true);
  const [loadGoal, setLoadGoal] = useState<boolean>(true);
  const [theGoal, setTheGoal] = useState<GoalType | undefined>(undefined);
  const [milestoneListObj, setMilestoneListObj] = useState<
    MilestoneType[] | undefined
  >(undefined);

  // Edit mode states
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedDifficulty, setEditedDifficulty] = useState<number>(1);

  useEffect(() => {
    const fetchGoal = async () => {
      setLoadGoal(true);
      try {
        const response = await axios.get<GoalType>(
          `https://localhost:7293/api/goal/${Number(id)}`
        );
        setTheGoal(response.data);
        setEditedName(response.data.name); // Initialize editing fields
        setEditedDifficulty(response.data.difficulty);
      } catch (error) {
        console.error("Failed to fetch user goal:", error);
      }
      setLoadGoal(false);
    };

    if (userProfile?.goalList) {
      fetchGoal();
    }
  }, [userProfile, id]);

  useEffect(() => {
    if (theGoal != undefined) {
      setMilestoneListObj(theGoal.milestoneList);
    }
  }, [theGoal]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    if (!id) return;
    try {
      const updatedGoal = {
        name: editedName,
        difficulty: editedDifficulty,
      };

      await axios.put(`https://localhost:7293/api/goal/${id}`, updatedGoal);
      setTheGoal((prevGoal) => ({
        ...prevGoal!,
        name: updatedGoal.name,
        difficulty: updatedGoal.difficulty,
      }));
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Failed to update goal:", error);
    }
  };

  return (
    <div className="content-background">
      {loadGoal ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="col">
            {!isEditing ? (
              <>
                <h1>{theGoal?.name}</h1>
                <p>Difficulty: {"⭐".repeat((theGoal?.difficulty || 1) + 1)}</p>
                <button onClick={handleEditToggle}>Edit</button>
              </>
            ) : (
              <div className="edit-goal">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Edit Goal Name"
                />
                <input
                  type="number"
                  value={editedDifficulty}
                  onChange={(e) =>
                    setEditedDifficulty(
                      Math.max(0, Math.min(2, Number(e.target.value)))
                    )
                  }
                  placeholder="Edit Difficulty (0-2)"
                  min={0}
                  max={2}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleEditToggle}>Cancel</button>
              </div>
            )}
            <button>Take Final Quiz</button>
          </div>
          <hr />
          <div className="goalsBox">
            {milestoneListObj?.map((milestone, index) => {
              return (
                <MilestoneComponent
                  generateQuiz={generateQuiz}
                  key={index}
                  index={index}
                  milestone={milestone}
                />
              );
            })}
          </div>
          <AddMilestoneComponent
            setLoading={setLoading}
            loading={loading}
            index={2}
            goalId={Number(id)}
          />
        </>
      )}
    </div>
  );
};

export default GoalSite;
