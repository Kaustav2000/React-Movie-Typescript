import React, { useState } from "react";
import CardBox from "../../components/CardBox/CartBox";
import HomeSearchForm from "../../components/HomeSearchForm/HomeSearchForm";
import { Home } from "./Homepage.style";
import Join from "../../components/Join/Join";
import HomeSectionHeading from "../../components/HomeSectionHeading/HomeSectionHeading";

export interface IState {
  headings: {
    heading: string;
    categories: string[];
  }[];
}

const Homepage = () => {
  const [data, setData] = useState<IState["headings"]>([
    {
      heading: "What's Popular",
      categories: ["Streaming", "On Tv", "For Rent", "In Theatres"],
    },
    {
      heading: "Free To Watch",
      categories: ["Movies", "Tv"],
    },
    {
      heading: "Trending",
      categories: ["Today", "This Week"],
    },
  ]);
  return (
    <>
      <Home>
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <HomeSearchForm />
      </Home>
      <HomeSectionHeading data={data[0]} />
      <CardBox />
      <HomeSectionHeading data={data[1]} />
      <CardBox />
      <Join />
      <HomeSectionHeading data={data[2]} />
      <CardBox />
    </>
  );
};

export default Homepage;
