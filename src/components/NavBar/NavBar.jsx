import './NavBar.scss';

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UploadButton from "../UploadButton/UploadButton";
import Avatar from "../Avatar/Avatar";

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
