import React from 'react';

import ToolList from "src/ToolList";
import FilterTag from "src/Tags/FilterTags";

// TODO: create a tag input component
const NavBar: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>([]);
  return (
      <div className="container">
      <ToolList>
      {tags.map(tag => <FilterTag key={tag} isCancelable>{tag}</FilterTag>)}
      </ToolList>
      <input />
      </div>
      );
}

export default NavBar;
