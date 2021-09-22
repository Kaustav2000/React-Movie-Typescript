import styled from "styled-components";
import logo from "../../../assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";

export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(3, 37, 65, 1);
  color: white;
  padding: 0 100px;
`;

export const NavLogoUL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    list-style: none;
    margin-right: 20px;
    font-size: 18px;
    cursor: pointer;

    &:first-child {
      background: url(${logo}) no-repeat center center/cover;
      height: 24px;
      width: 185px;
    }
  }
`;

export const LoginUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  li {
    font-size: 18px;
    list-style: none;
    margin-right: 20px;
  }
`;
