import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Heading = styled(Container)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  ${Container}
`;

export const Categories = styled.div`
  width: 380px;
  height: 35px;
  border: 2px solid black;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
`;

export const Category = styled.span`
  background-color: #051d4d;
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
  padding-top: 7px;
  border-radius: 50px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;
