import { Link } from "react-router-dom";

/* STYLES */
import "./NavBar.scss";
import userAvatar from "@/assets/images/Mohan-muruge.jpg"
import uploadIcon from "@/assets/icons/upload.svg";

/* COMPONENTS */
import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

function NavBar() {

  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <Button icon={uploadIcon} text="upload" />
      <Avatar image={userAvatar} />
    </header>
  )

};

export default NavBar;
