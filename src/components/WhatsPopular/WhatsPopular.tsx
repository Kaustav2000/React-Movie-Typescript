import React from "react";
import { Heading, Categories, Category } from "./WhatsPopular.style";

const WhatsPopular = () => {
  return (
    <Heading>
      <h1>What's Popular</h1>
      <Categories>
        <Category>Streaming</Category>
        <Category>On Tv</Category>
        <Category>For Rent</Category>
        <Category>In Theatres</Category>
      </Categories>
    </Heading>
  );
};

export default WhatsPopular;
