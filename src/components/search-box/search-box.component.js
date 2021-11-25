import React from "react";
import "./search-box.styles.css"
const SearchBox = ({ searchEventHandler, placeholder }) => {
  return (
    <div>
      <input className="search" type="search" placeholder={placeholder} onChange={searchEventHandler}  />
    </div>
  );
};

export default SearchBox;
