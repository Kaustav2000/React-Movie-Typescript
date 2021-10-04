import React, { Fragment } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import { results } from "../HomeSearchForm/HomeSearchForm";

const SearchResultBox = () => {
  return (
    <div>
      {results.map((item, idx) => (
        <Fragment key={idx}>
          <SearchResult item={item} />
        </Fragment>
      ))}
    </div>
  );
};

export default SearchResultBox;
