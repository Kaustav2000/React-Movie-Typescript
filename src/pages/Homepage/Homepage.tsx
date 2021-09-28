import React, { useState, useEffect } from "react";
import CardBox from "../../components/CardBox/CartBox";
import HomeSearchForm from "../../components/HomeSearchForm/HomeSearchForm";
import { Home } from "./Homepage.style";
import Join from "../../components/Join/Join";
import HomeSectionHeading from "../../components/HomeSectionHeading/HomeSectionHeading";
import { popularStreamingData } from "../../api/fetchHomepagedata";
import { useFetchData } from "../../hooks/useFetchData";

export interface IState {
  headings: {
    heading: string;
    categories: string[];
  }[];
  movies: any[];
}

const Homepage = () => {
  const [data, setData] = useState<IState["headings"]>([
    {
      heading: "What's Popular",
      categories: ["Popular", "Tv Popular", "In Theatres"],
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

  const { state, setPopular, setFree, setTrending } = useFetchData();

  useEffect(() => {
    setPopular("Popular");
    setFree("Movies");
    setTrending("Today");
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
      <CardBox movies={state.popular} />
      <HomeSectionHeading data={data[1]} />
      <CardBox movies={state.free} />
      <Join />
      <HomeSectionHeading data={data[2]} />
      <CardBox movies={state.free} />
    </>
  );
};

export default Homepage;
