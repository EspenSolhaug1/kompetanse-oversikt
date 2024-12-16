import "./Profile.css";
import "../../App.css";
import { useContext, useState } from "react";
import { myContext, myContextType } from "../../App.tsx";
import GoalListProfileComponent from "../GoalProfile/GoalListProfileComponent.tsx";
import SkillListProfileComponent from "../SkillProfile/SkillListProfileComponent.tsx";
import axios from "axios";

const Profile = () => {
  const { userProfile, setUserProfile } = useContext(
    myContext
  ) as myContextType;

  // Edit mode states
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userProfile?.name || "");
  const [editedJobTitle, setEditedJobTitle] = useState(
    userProfile?.jobTitle || ""
  );

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    if (!userProfile) return;

    try {
      const updatedProfile = {
        name: editedName,
        jobTitle: editedJobTitle,
        totalPoints: userProfile.totalPoints,
      };

      // Update the profile via API
      await axios.put(
        `https://localhost:7293/api/profile/${userProfile.id}`,
        updatedProfile
      );

      // Update the context with the new profile
      setUserProfile((prevProfile) => ({
        ...prevProfile!,
        name: updatedProfile.name,
        jobTitle: updatedProfile.jobTitle,
        totalPoints: userProfile.totalPoints,
      }));

      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="content-background">
      <div className="top-info">
        <div className="d-flex align-items-center justify-content-center position-relative w-100">
          {!isEditing ? (
            <h2 className="text-center m-0 flex-grow-1">
              {userProfile?.name || "Guest"}!
            </h2>
          ) : (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="form-control"
              placeholder="Enter name"
            />
          )}
          <button
            className="btn btn-primary position-absolute end-0"
            onClick={isEditing ? handleSave : handleEditToggle}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <hr className="my-2" />
        <div className="title-and-epost d-flex justify-content-between">
          {!isEditing ? (
            <h5 className="m-0">{userProfile?.jobTitle}</h5>
          ) : (
            <input
              type="text"
              value={editedJobTitle}
              onChange={(e) => setEditedJobTitle(e.target.value)}
              className="form-control"
              placeholder="Enter job title"
            />
          )}
          <h5 className="m-0">epost@epost.com</h5>
        </div>
      </div>

      <GoalListProfileComponent />
      <SkillListProfileComponent />
    </div>
  );
};

export default Profile;
