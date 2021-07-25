import React from 'react';

import ToolList from "src/ToolList";
import FilterTag from "src/Tags/FilterTags";

import './index.css';

// TODO: create a tag input component
const NavBar: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>(["Frontend"]);
  const handleAddTags = (event) => {
    if (event.code === "Enter") {
      const { target: { value } } = event;
      setTags([...tags, value]);
      event.target.value = "";
    }
  }
  return (
      <div className="container">
      <ToolList>
      {tags.map(tag => <FilterTag key={tag} isCancelable>{tag}</FilterTag>)}
      </ToolList>
      <input onKeyPress={handleAddTags}className="search" />
      </div>
      );
}

export default NavBar;