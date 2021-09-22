import React from "react";
import { Nav, NavLogoUL, LoginUl } from "./Navbar.style";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogoUL>
          <li></li>
          <li>Movies</li>
          <li>Tv Shows</li>
        </NavLogoUL>

        <LoginUl>
          <li>Login</li>
        </LoginUl>
      </Nav>
    </>
  );
};

export default Navbar;
