import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 90%;
  margin-top: 15px;

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 120px;
    border-radius: 50px;
    border: none;
    outline: none;
    background: linear-gradient(
      to right,
      rgba(30, 213, 169, 1) 0%,
      rgba(1, 180, 228, 1) 100%
    );
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 25px;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 17px;
`;
