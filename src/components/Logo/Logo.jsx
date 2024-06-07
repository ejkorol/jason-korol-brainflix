/* LOGIC */
import { Link } from "react-router-dom";

/* STYLES */
import "./Logo.scss";

/* ICONS */
import logo from "@/assets/logo/BrainFlix-logo.svg";

function Logo () {

  return (
    <div className="header__logo-wrapper">
      <Link to="/">
        <img src={logo} className="header__logo" />
      </Link>
    </div>
  );

};

export default Logo;
