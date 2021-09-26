import React from "react";
import { Heading, Categories, Category } from "./WhatsPopular.style";

const WhatsPopular = () => {
  return (
    <Heading>
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
