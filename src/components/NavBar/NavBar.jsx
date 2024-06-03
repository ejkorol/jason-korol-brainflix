/* STYLES */
import "./NavBar.scss";
import userAvatar from "@/assets/images/Mohan-muruge.jpg"

/* COMPONENTS */
import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

/* ICONS */
import uploadIcon from "@/assets/icons/upload.svg";

function NavBar() {

  return (
    <header className="header">
      <Logo />
      <Search />
      <Button icon={uploadIcon} text="upload" />
      <Avatar image={userAvatar} />
    </header>
  )

};

export default NavBar;
