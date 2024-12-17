import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import "./Navbar.css";

export default function Navbar() {
  const { userProfile, setUserProfile, handlePageExit } = useContext(
    myContext
  ) as myContextType;
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    navigate(`/`);
    setUserProfile(null);
  };

  const navigateProfile = () => {
    handlePageExit(() => navigate("/"));
  };

  const navigateGoal = (goalId: number) => {
    handlePageExit(() => navigate(`/goals/${goalId}`));
  };

  // Determine the name for the second button
  const secondButtonName =
    location.pathname === "/"
      ? "Mål"
      : userProfile?.goalList.find((goal) =>
          location.pathname.includes(`/goals/${goal.id}`)
        )?.name || "Mål";

  return (
    <nav className="navbar">
      {/* Left-side buttons */}
      <div className="menu-items">
        {/* User name button */}
        <button className="navbar-btn" onClick={navigateProfile}>
          {userProfile?.name || "User"}
        </button>

        {/* Goals button with dropdown */}
        <div className="dropdown">
          <button className="navbar-btn drop-btn">{secondButtonName}</button>
          <div className="drop-content">
            {userProfile?.goalList.map((goal) => (
              <a key={goal.id} onClick={() => navigateGoal(goal.id)}>
                {goal.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right-side logout button */}
      <button onClick={logOut} className="logoutBtn">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            viewBox="0 0 24 24"
            height="40px"
            width="30px"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
            <path d="M7 12h14l-3-3m0 6l3-3" />
          </svg>
      </button>
    </nav>
  );
}
