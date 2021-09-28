import styled from "styled-components";
import { Container } from "../../globalStyles";

interface IProps {
  selectedCategory: boolean;
}

export const Heading = styled(Container)`
  display: flex;
  align-items: center;
  ${Container};

  padding-bottom: 0;
`;

export const Categories = styled.div`
  width: 380px;
  height: 35px;
  border: 2px solid black;
  margin-left: 50px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  border-radius: 50px;
  /* overflow: hidden; */
`;

export const Category = styled.span`
  background-color: ${(props: IProps) =>
    props.selectedCategory ? "#051d4d" : "#fff"};
  height: 100%;
  width: 100%;
  text-align: center;
  color: ${(props: IProps) => (props.selectedCategory ? "#fff" : "#000")};
  padding-top: 7px;
  border-radius: 50px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  transition: 0.6s all ease;
  /* margin-right: 10px; */
`;
