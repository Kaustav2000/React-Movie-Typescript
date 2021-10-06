import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchData } from "../../api/fetchHomepagedata";
import SearchResultSkeleton from "../../components/Common/Loaders/SearchResultSkeleton";
import SearchCategories from "../../components/SearchCategories/SearchCategories";
import SearchResultBox from "../../components/SearchResultBox/SearchResultBox";

import { SearchPageWrapper } from "./SearchPage.style";
interface Iparam {
  id: string;
}

const SearchPage = () => {
  const params: Iparam = useParams();
  const [data, setData] = useState([]);

  const fetchData = async (query: string) => {
    let response = await searchData(query);
    setData(response);
  };

  useEffect(() => {
    fetchData(params.id);
  }, []);
  return (
    <>
      <SearchPageWrapper>
        <SearchCategories />
        {data.length ? (
          <SearchResultBox data={data} />
        ) : (
          <SearchResultSkeleton />
        )}
      </SearchPageWrapper>
    </>
  );
};

export default SearchPage;
