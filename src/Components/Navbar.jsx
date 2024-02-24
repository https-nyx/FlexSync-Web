import logo from "../assets/flexsync-logo.png";
import NavbarStyle from "../Styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className={NavbarStyle["navbar"]}>
        <div className={NavbarStyle["navbar-logo-container"]}>
          <img
            src={logo}
            alt="FlexSync Logo"
            className={NavbarStyle["navbar-logo"]}
          />
          <h1 className={NavbarStyle["navbar-title"]}>Flexsync</h1>
        </div>
        <nav className={NavbarStyle["navbar-list-container"]}>
          <ul className={NavbarStyle["navbar-list"]}>
            <Link to="/">
              <li className={NavbarStyle["navbar-items"]}>Home</li>
            </Link>
            <Link to="/workout">
              <li className={NavbarStyle["navbar-items"]}>Workout</li>
            </Link>
            <Link to="/diet">
              <li className={NavbarStyle["navbar-items"]}>Diet</li>
            </Link>
            <Link to="/signup">
              <li className={NavbarStyle["navbar-items"]}>Sign Up</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
