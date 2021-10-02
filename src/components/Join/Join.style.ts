import styled from "styled-components";
import { Container } from "../../globalStyles";
import Img from "../../assets/join.jpg";

export const JoinBox = styled(Container)`
  margin-top: 50px;
  background: url(${Img}) no-repeat center center/cover;
  height: 300px;
  ${Container}
  padding: 30px 40px;
  padding-top: 100px;
`;
