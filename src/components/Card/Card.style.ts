import styled from "styled-components";

interface IProps {
  img: string;
}

export const CardWrapper = styled.div`
  width: 150px;
  height: 340px;
  margin-right: 20px;
`;

export const CardImg = styled.div`
  position: relative;
  height: 225px;
  cursor: pointer;
  background: url(${(props: IProps) =>
      props.img &&
      "https://www.themoviedb.org/t/p/w220_and_h330_face" + props.img})
    no-repeat center center/cover;

  div {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  border-radius: 10px;
`;

export const Details = styled.div`
  padding: 25px 10px 0;
`;

export const Title = styled.h3`
  font-weight: bolder;
  /* margin-top: 25px; */
  font-size: 16px;
  cursor: pointer;
`;

export const Release = styled.p`
  font-weight: 100;
  color: grey;
  font-size: 16px;
`;
