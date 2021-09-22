import React from "react";
import HomeSearchForm from "../../components/HomeSearchForm/HomeSearchForm";
import WhatsPopular from "../../components/WhatsPopular/WhatsPopular";
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
    </>
  );
};

export default Homepage;
