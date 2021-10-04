import SearchCategories from "../../components/SearchCategories/SearchCategories";

import SearchResultBox from "../../components/SearchResultBox/SearchResultBox";

import { SearchPageWrapper } from "./SearchPage.style";

const SearchPage = () => {
  return (
    <>
      <SearchPageWrapper>
        <SearchCategories />
        <SearchResultBox />
      </SearchPageWrapper>
    </>
  );
};

export default SearchPage;
