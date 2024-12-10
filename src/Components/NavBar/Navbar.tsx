import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext, myContextType } from "../../App";
import "./Navbar.css";

export default function Navbar() {
  const { userProfile, setUserProfile } = useContext(
    myContext
  ) as myContextType;
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("storedUser");
    navigate(`/`);
    setUserProfile(null);
  };

  // Determine the name for the second button
  const secondButtonName =
    location.pathname === "/"
      ? "Mål"
      : userProfile?.goals.find((goal) =>
          location.pathname.includes(`/goals/${goal.id}`)
        )?.name || "Mål";

  return (
    <nav className="navbar">
      {/* Left-side buttons */}
      <div className="menu-items">
        {/* User name button */}
        <button className="navbar-btn" onClick={() => navigate("/")}>
          {userProfile?.name || "User"}
        </button>

        {/* Goals button with dropdown */}
        <div className="dropdown">
          <button className="navbar-btn drop-btn">{secondButtonName}</button>
          <div className="drop-content">
            {userProfile?.goals.map((goal) => (
              <a
                key={goal.id}
                onClick={() => navigate(`/goals/${goal.id}`)}
                href="#"
              >
                {goal.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right-side logout button */}
      <button onClick={logOut} className="logout-button">
        Logg ut
      </button>
    </nav>
  );
}
