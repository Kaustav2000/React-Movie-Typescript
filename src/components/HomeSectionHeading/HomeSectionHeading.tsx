import React, { Fragment } from "react";
import { Heading, Categories, Category } from "./HomeSectionHeading.style";

interface IProps {
  data: {
    heading: string;
    categories: string[];
  };
}

const HomeSectionHeading: React.FC<IProps> = ({ data }) => {
  return (
    <Heading>
      <h1>{data.heading}</h1>
      <Categories>
        {data.categories.map((item, idx) => (
          <Fragment key={idx}>
            <Category>{item}</Category>
          </Fragment>
        ))}
      </Categories>
    </Heading>
  );
};

export default HomeSectionHeading;
