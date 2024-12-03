import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="col navbar">
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
      <div className="logout-button">
        <p>Logg ut</p>
      </div>
    </nav>
  );
}
