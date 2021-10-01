import React, { Fragment } from "react";
import Card from "../Card/Card";
import { CardBoxWrapper } from "./CardBox.style";
import { IState as Props } from "../../pages/Homepage/Homepage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  movies: Props["movies"];
}
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
};

const CardBox: React.FC<IProps> = ({ movies }) => {
  return (
    <CardBoxWrapper>
      <Slider {...settings}>
        {movies?.map((item, key) => (
          <Fragment key={key}>
            <Card item={item} />
          </Fragment>
        ))}
      </Slider>
    </CardBoxWrapper>
  );
};

export default CardBox;
