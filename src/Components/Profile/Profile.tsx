import { useContext } from "react";
import { myContext, myContextType } from "../../App.tsx";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(
    myContext
  ) as myContextType;
  return (
    <div>
      <h1>Welcome, {currentUser?.name || "Guest"}!</h1>
      <p>Goals</p>
      <p>{currentUser?.goals[0].name}</p>
      <p>
        <b>{currentUser?.goals[0].milestones[1].title}: </b>
        {currentUser?.goals[0].milestones[1].description}
      </p>
    </div>
  );
};

export default Profile;
