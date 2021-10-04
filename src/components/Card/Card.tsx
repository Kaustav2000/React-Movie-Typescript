import React from "react";
import {
  CardImg,
  CardWrapper,
  Details,
  ProgressBar,
  ProgressBarParent,
  Release,
  Title,
} from "./Card.style";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      <ProgressBarParent>
        <ProgressBar>
          <CircularProgressbar
            value={item.vote_average * 10}
            text={`${item.vote_average * 10}%`}
            styles={buildStyles({
              textColor: "white",
              textSize: "25px",
            })}
          />
        </ProgressBar>
      </ProgressBarParent>
      <Details>
        <Title>{item.original_title || item.original_name}</Title>
        <Release>{item.release_date || item.first_air_date}</Release>
      </Details>
    </CardWrapper>
  );
};

export default Card;
