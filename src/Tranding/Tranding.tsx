import React from "react";
import {
  Categories,
  Category,
  Heading,
} from "../components/WhatsPopular/WhatsPopular.style";

const Tranding = () => {
  return (
    <Heading>
      <h1>Trending</h1>
      <Categories style={{ width: "200px" }}>
        <Category>Today</Category>
        <Category>This Week</Category>
      </Categories>
    </Heading>
  );
};

export default Tranding;
