import './NavBar.scss';

/* COMPONENTS */
import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

/* ICONS */
import uploadIcon from "@/assets/icons/upload.svg";

function NavBar() {

  return (
    <header>
      <Logo />
      <Search />
      <Button icon={uploadIcon} text="upload" />
      <Avatar />
    </header>
  )

};

export default NavBar;
