import React from "react";
import { CardImg, CardWrapper, Details, Release, Title } from "./Card.style";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";

const Card = () => {
  return (
    <CardWrapper>
      <CardImg>
        <div>
          <IoEllipsisHorizontalCircleSharp />
        </div>
      </CardImg>
      <Details>
        <Title>SAS:Red Notice</Title>
        <Release>Aug 11, 2021</Release>
      </Details>
    </CardWrapper>
  );
};

export default Card;
