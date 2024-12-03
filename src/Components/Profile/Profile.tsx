import "./Profile.css";
import "../../App.css";
import { useContext } from "react";
import { myContext, myContextType } from "../../App.tsx";
import GoalListProfileComponent from "../GoalProfile/GoalListProfileComponent.tsx";
import SkillListProfileComponent from "../SkillProfile/SkillListProfileComponent.tsx";

const Profile = () => {
  const { currentUser } = useContext(myContext) as myContextType;
  return (
    <div className="content-background">
      <div className="top-info">
        <div className="d-flex">
          <h1 className="justify-content-center">
            {currentUser?.name || "Guest"}!
          </h1>
          <button className="justify-content-end">Rediger</button>
        </div>
        <hr></hr>
        <div className="title-and-epost">
          <h3>{currentUser?.jobTitle}</h3>
          <h3>epost@epost.com</h3>
        </div>
      </div>
      <GoalListProfileComponent />
      <SkillListProfileComponent />
    </div>
  );
};

export default Profile;
