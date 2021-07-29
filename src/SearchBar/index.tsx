import React, {useContext} from 'react';

import ToolList from "src/ToolList";
import FilterTag from "src/Tags/FilterTags";

import {FilterContext} from 'src/FilterContext';

import './index.css';
const SearchBar: React.FC = () => {
  const {tags = [], handleAdd} = useContext(FilterContext);
  const handleAddTags = (event) => {
    if (event.code === "Enter") {
      const {target: {value}} = event;
      handleAdd(value);
      event.target.value = "";
    }
  }
  return (
    <div className="searchcontainer">
      <ToolList>
        {tags.map(tag => <FilterTag key={tag} isCancelable>{tag}</FilterTag>)}
      </ToolList>
      <div className="clearText">Clear</div>
    </div>
  );
}

export default SearchBar;
