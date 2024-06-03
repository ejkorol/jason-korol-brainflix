/* STYLES */
import "./Logo.scss";

/* ICONS */
import logo from "@/assets/logo/BrainFlix-logo.svg"

function Logo () {
  return (
    <div className="header__logo-wrapper">
      <img src={logo} className="header__logo" />
    </div>
  )
};

export default Logo;
