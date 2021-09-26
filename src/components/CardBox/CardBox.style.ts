import styled from "styled-components";
import { Container } from "../../globalStyles";

export const CardBoxWrapper = styled(Container)`
  display: -webkit-box;
  /* flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start; */
  padding-top: 20px;
  ${Container};
  padding-bottom: 20px;
  overflow-y: hidden;

  overflow-x: scroll;
  height: 400px;
`;
