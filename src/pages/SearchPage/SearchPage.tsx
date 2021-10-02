import SearchCategories from "../../components/SearchCategories/SearchCategories";
import SearchResult from "../../components/SearchResult/SearchResult";

import { SearchPageWrapper } from "./SearchPage.style";

const SearchPage = () => {
  return (
    <>
      <SearchPageWrapper>
        <SearchCategories />
        <SearchResult />
      </SearchPageWrapper>
    </>
  );
};

export default SearchPage;
