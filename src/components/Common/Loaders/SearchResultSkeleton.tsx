import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
let arr = [1, 2, 3, 4, 5, 6];
const SearchResultSkeleton = () => {
  return (
    <Fragment>
      {arr.map((i, idx) => (
        <div style={{ display: "flex", marginBottom: "50px" }} key={idx}>
          <Skeleton width={150} height={180} style={{ marginRight: "20px" }} />
          <Skeleton
            width={1000}
            height={30}
            count={5}
            style={{ marginBottom: "5px" }}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default SearchResultSkeleton;
