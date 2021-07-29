import React, {useContext} from 'react';

import ToolList from "src/ToolList";
import FilterTag from "src/Tags/FilterTag";

import {FilterContext} from 'src/FilterContext';

import './index.css';

const SearchBar: React.FC = () => {
  const {tags = [], handleDeleteAll} = useContext(FilterContext);

  return (
    <div className="searchcontainer">
      <ToolList>
        {tags.map(tag => <FilterTag key={tag}>{tag}</FilterTag>)}
      </ToolList>
      <div className="clearText" onClick={handleDeleteAll}>Clear</div>
    </div>
  );
}

export default SearchBar;
