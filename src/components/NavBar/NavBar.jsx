import './NavBar.scss';

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UploadButton from "../UploadButton/UploadButton";

function NavBar() {

  return (
    <header>
      <Logo />
      <Search />
      <UploadButton />
    </header>
  )

};

export default NavBar;
