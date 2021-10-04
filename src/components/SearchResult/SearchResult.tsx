import React from "react";
import { results } from "../HomeSearchForm/HomeSearchForm";
import {
  Content,
  Date,
  Description,
  Heading,
  Image,
  SearchResultWrapper,
} from "./SearchResult.style";

interface Iprops {
  item: any;
}
const SearchResult = ({ item }: Iprops) => {
  console.log(results);

  let date: Date = new Date(item.release_date);
  console.log(date);
  return (
    <SearchResultWrapper>
      <Image img={item.poster_path} />
      <Content>
        <Heading>{item.title}</Heading>
        <Date>{date}</Date>
        <Description>{item.overview}</Description>
      </Content>
    </SearchResultWrapper>
  );
};

export default SearchResult;
