import './NavBar.scss';

import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import UploadButton from "@/components/UploadButton/UploadButton";
import Avatar from "@/components/Avatar/Avatar";

function NavBar() {

  return (
    <header>
      <Logo />
      <Search />
      <UploadButton />
      <Avatar />
    </header>
  )

};

export default NavBar;
