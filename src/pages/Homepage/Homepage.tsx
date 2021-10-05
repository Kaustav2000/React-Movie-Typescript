import { useEffect } from "react";
import CardBox from "../../components/CardBox/CartBox";
import HomeSearchForm from "../../components/HomeSearchForm/HomeSearchForm";
import { Home } from "./Homepage.style";
import Join from "../../components/Join/Join";
import HomeSectionHeading from "../../components/HomeSectionHeading/HomeSectionHeading";
import { useFetchData } from "../../hooks/useFetchData";

export interface IState {
  heading: string;
  categories: string[];
  movies?: any[];
  type?: any;
}

const Homepage = () => {
  let popular: IState = {
    heading: "What's Popular",
    categories: ["Popular", "TV Popular", "In Theatres"],
  };
  let freeToWatch: IState = {
    heading: "Free To Watch",
    categories: ["TV", "Movies"],
  };
  let trending: IState = {
    heading: "Trending",
    categories: ["Today", "This Week"],
  };

  const { state, setPopular, setFree, setTrending } = useFetchData();

  useEffect(() => {
    setPopular("Popular");
    setFree("TV");
    setTrending("Today");
  }, []);

  // console.log(results);

  return (
    <>
      <Home>
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <HomeSearchForm />
      </Home>
      <HomeSectionHeading data={popular} type={setPopular} />
      <CardBox movies={state.popular} />
      <HomeSectionHeading data={freeToWatch} type={setFree} />
      <CardBox movies={state.free} />
      <Join />
      <HomeSectionHeading data={trending} type={setTrending} />
      <CardBox movies={state.trending} />
    </>
  );
};

export default Homepage;
