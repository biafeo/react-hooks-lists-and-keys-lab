import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavBarElements = links.map((link, index) => (
    <a key= {index} href={`#${link}`}>{link}</a>
  ));

  return <nav>{NavBarElements}</nav>;
}

export default NavBar;