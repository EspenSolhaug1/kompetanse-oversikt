import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { setUserProfile } = useContext(myContext) as myContextType;

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("storedUser");
    navigate(`/`);
    setUserProfile(null);
  };
  return (
    <nav className="navbar">
      <div className="menu-items">
        <ul>
          <li>
            <a href="#">Ola Nordmænd</a>
          </li>
          <li>
            <div className="dropdown">
              <p className="drop-btn">Mål</p>
              <div className="drop-content">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="filler"></div>
      <button onClick={logOut} className="logout-button">
        <p>Logg ut</p>
      </button>
    </nav>
  );
}
