import styled from "styled-components";
interface Iprops {
  img: string;
}

export const Image = styled.div`
  width: 12%;
  height: 100%;
  background: url(${(props: Iprops) =>
      props.img &&
      "https://www.themoviedb.org/t/p/w220_and_h330_face" + props.img})
    no-repeat center center/cover;
`;
export const Heading = styled.h3`
  margin-bottom: 5px;
`;
export const Date = styled.p`
  margin-bottom: 30px;
  font-weight: 100;
  color: grey;
`;
export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Content = styled.div`
  width: 87%;
  margin-left: 10px;
  padding: 10px;
`;
export const SearchResultWrapper = styled.div`
  display: flex;
  height: 150px;
  width: 70%;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.26);
`;
