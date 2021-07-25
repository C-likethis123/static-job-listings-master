import React from 'react';

/** Shared components */
import FilterTag from 'src/Tags/FilterTags';

import './index.css';

type ToolListProps = {
  tools: string[];
  role: string;
  level: string;
  languages: string[];
}

const ToolList: React.FC<ToolListProps> = ({
  tools,
  role,
  level,
  languages,
}) => {
  return (
    <div className="tagcontainer">
      <FilterTag>{role}</FilterTag>
      <FilterTag>{level}</FilterTag>
      {languages.map((language) => <FilterTag key={language}>{language}</FilterTag>)}
      {tools.map((tool) => <FilterTag key={tool}>{tool}</FilterTag>)}
    </div>
  )
}

export default ToolList;

