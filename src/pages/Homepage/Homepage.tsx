import React from "react";
import CardBox from "../../components/CardBox/CartBox";
import FreeToWatch from "../../components/FreeToWatch/FreeToWatch";
import HomeSearchForm from "../../components/HomeSearchForm/HomeSearchForm";
import WhatsPopular from "../../components/WhatsPopular/WhatsPopular";
import Join from "../../Join/Join";
import Tranding from "../../Tranding/Tranding";
import { Home } from "./Homepage.style";

const Homepage = () => {
  return (
    <>
      <Home>
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <HomeSearchForm />
      </Home>
      <WhatsPopular />
      <CardBox />
      <FreeToWatch />
      <CardBox />
      <Join />
      <Tranding />
      <CardBox />
    </>
  );
};

export default Homepage;
