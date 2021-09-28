import React from "react";
import { CardImg, CardWrapper, Details, Release, Title } from "./Card.style";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";

interface IProps {
  item: { [key: string]: any };
}

const Card: React.FC<IProps> = ({ item }) => {
  return (
    <CardWrapper>
      <CardImg img={item.poster_path}>
        <div>
          <IoEllipsisHorizontalCircleSharp />
        </div>
      </CardImg>
      <Details>
        <Title>{item.original_title || item.original_name}</Title>
        <Release>{item.release_date || item.first_air_date}</Release>
      </Details>
    </CardWrapper>
  );
};

export default Card;
