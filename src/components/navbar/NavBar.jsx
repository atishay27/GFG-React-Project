import logo from "../../assets/newlogo.png";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar navbar-grid">
      <div className="company">
        <img id="logo-image" src={logo} alt="logo" />
        <h1 className="company-name">StatShop</h1>
      </div>
      <ul className="nav-menu">
        <li className="menu-item">
          <a href="#" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Products
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Registration
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
