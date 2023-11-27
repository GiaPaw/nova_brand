import React from "react";
import "./SearchResultPage.scss"; // Import file SCSS
import Card from "../../components/Card/Card"; // Import component hiển thị sản phẩm

const SearchResultPage = ({ searchResults }) => {
  return (
    <div className="search-result-page">
      <h1>Search Results</h1>
      <div className="product-list">
        {searchResults.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
