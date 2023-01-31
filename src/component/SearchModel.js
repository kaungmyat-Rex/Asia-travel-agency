import React from "react";
import { BiSearch } from "react-icons/bi";
import { SlClose } from "react-icons/sl";

const SearchModel = ({ searchModel, setSearchModel }) => {
  return (
    <div className={`search-showHide ${searchModel ? "searchModel-show" : ""}`}>
      <div className="search-section">
        <div className="search-border">
          <div className="search-main">
            <input
              className="searchmodel-input"
              type="text"
              placeholder=" Search Your Travel or Package"
            />
            <BiSearch className="searchmodel-icon" />
            <SlClose
              className="searchClose-icon"
              onClick={() => setSearchModel(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
