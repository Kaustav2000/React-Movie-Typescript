import React, { Fragment } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";

interface Iprops {
  data: {}[];
}

const SearchResultBox = ({ data }: Iprops) => {
  return (
    <div>
      {data.map((item, idx) => (
        <Fragment key={idx}>
          <SearchResult item={item} />
        </Fragment>
      ))}
    </div>
  );
};

export default SearchResultBox;
