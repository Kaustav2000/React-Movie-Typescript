import React from "react";
import {
  Categories,
  Category,
  Heading,
} from "../WhatsPopular/WhatsPopular.style";

const FreeToWatch = () => {
  return (
    <Heading>
      <h1>Free To Watch</h1>
      <Categories style={{ width: "200px" }}>
        <Category>Movies</Category>
        <Category>Tv</Category>
      </Categories>
    </Heading>
  );
};

export default FreeToWatch;
