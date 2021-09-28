import React, { Fragment } from "react";
import Card from "../Card/Card";
import { CardBoxWrapper } from "./CardBox.style";
import { IState as Props } from "../../pages/Homepage/Homepage";

interface IProps {
  movies: Props["movies"];
}

const CardBox: React.FC<IProps> = ({ movies }) => {
  return (
    <CardBoxWrapper>
      {movies?.map((item, key) => (
        <Fragment key={key}>
          <Card item={item} />
        </Fragment>
      ))}
    </CardBoxWrapper>
  );
};

export default CardBox;
