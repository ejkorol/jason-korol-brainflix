import { useNavigate } from "react-router-dom";

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

  let navigate = useNavigate();

  function handleNavigation() {
    navigate('/upload');
  };

  return (
    <header className="header">
      <Logo />
      <Search />
      <Button icon={uploadIcon} role="link" text="upload" onClick={() => {handleNavigation()}} />
      <Avatar image={userAvatar} />
    </header>
  )

};

export default NavBar;
