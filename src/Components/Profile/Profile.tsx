import "./Profile.css";
import "../../App.css";
import { useContext } from "react";
import { myContext, myContextType } from "../../App.tsx";
import GoalListProfileComponent from "../GoalProfile/GoalListProfileComponent.tsx";

const Profile = () => {
  const { currentUser } = useContext(myContext) as myContextType;
  return (
    <div className="contentBackground">
      <h1>Welcome, {currentUser?.name || "Guest"}!</h1>

      <GoalListProfileComponent />
    </div>
  );
};

export default Profile;
