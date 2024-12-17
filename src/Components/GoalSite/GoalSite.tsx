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
  const { userProfile, isExiting } = useContext(myContext) as myContextType;

  const [loading, setLoading] = useState<boolean>(true);
  const [loadGoal, setLoadGoal] = useState<boolean>(true);
  const [theGoal, setTheGoal] = useState<GoalType | undefined>(undefined);
  const [milestoneListObj, setMilestoneListObj] = useState<
    MilestoneType[] | undefined
  >(undefined);
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
        difficulty: editedDifficulty - 1,
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
    <div className={`content-background ${isExiting ? "exit" : ""}`}>
      {loadGoal ? (
        <p>Laster...</p>
      ) : (
        <>
          <div>
            {!isEditing ? (
              <>
                <h1>{theGoal?.name}</h1>
                <p>
                  Vanskelighetsgrad:{" "}
                  {"⭐".repeat((theGoal?.difficulty || 1) + 1)}
                </p>
                <button onClick={handleEditToggle}>Endre</button>
              </>
            ) : (
              <div className="edit-goal">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Endre målnavn"
                />
                <input
                  type="number"
                  value={editedDifficulty}
                  onChange={(e) =>
                    setEditedDifficulty(
                      Math.max(0, Math.min(3, Number(e.target.value)))
                    )
                  }
                  placeholder="Endre vanskelighetsgrad (1-3)"
                  min={1}
                  max={3}
                />
                <button onClick={handleSave}>Lagre</button>
                <button onClick={handleEditToggle}>Avbryt</button>
              </div>
            )}
          </div>
          <AddMilestoneComponent
            setLoading={setLoading}
            loading={loading}
            index={2}
            goalId={Number(id)}
          />
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
        </>
      )}
    </div>
  );
};

export default GoalSite;
