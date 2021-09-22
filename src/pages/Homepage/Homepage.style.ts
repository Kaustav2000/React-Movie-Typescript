import styled from "styled-components";
import { Container } from "../../globalStyles";
import HeroImg from "../../assets/hero.jpg";

export const Home = styled(Container)`
  height: 50vh;
  background: url(${HeroImg}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  color: white;

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 25px;
    margin: 15px 0;
  }
  ${Container}
`;
