import './NavBar.scss';

import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

function NavBar() {

  return (
    <header>
      <Logo />
      <Search />
      <Button />
      <Avatar />
    </header>
  )

};

export default NavBar;
