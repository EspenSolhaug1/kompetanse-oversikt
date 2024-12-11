import "./Profile.css";
import "../../App.css";
import { useContext } from "react";
import { myContext, myContextType } from "../../App.tsx";
import GoalListProfileComponent from "../GoalProfile/GoalListProfileComponent.tsx";
import SkillListProfileComponent from "../SkillProfile/SkillListProfileComponent.tsx";

const Profile = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  console.log(userProfile);
  return (
    <div className="content-background">
      <div className="top-info">
        <div className="d-flex align-items-center justify-content-center position-relative w-100">
          <h2 className="text-center m-0 flex-grow-1">
            {userProfile?.name || "Guest"}!
          </h2>
          <button className=" btn-primary position-absolute end-0">
            Rediger
          </button>
        </div>
        <hr className="my-2" />
        <div className="title-and-epost d-flex justify-content-between">
          <h5 className="m-0">{userProfile?.jobTitle}</h5>
          <h5 className="m-0">epost@epost.com</h5>
        </div>
      </div>

      <GoalListProfileComponent />
      <SkillListProfileComponent />
    </div>
  );
};

export default Profile;
