import "./Profile.css";
import "../../App.css";
import { useContext } from "react";
import { myContext, myContextType } from "../../App.tsx";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(
    myContext
  ) as myContextType;
  return (
    <div className="content-background">
      <div className="top-info">
        <div className="name-and-btn">
          <h1>{currentUser?.name || "Guest"}!</h1>
          <button className="edit-profile-btn">Rediger</button>
        </div>
        <hr></hr>
        <div className="title-and-epost">
          <h3>{currentUser?.jobTitle}</h3>
          <h3>epost@epost.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
