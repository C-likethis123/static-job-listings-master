import React from 'react';

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
      <div className="taginput">{role}</div>
      <div className="taginput">{level}</div>
      {languages.map((language) => <div key={language} className="taginput">{language}</div>)}
      {tools.map((tool) => <div key={tool} className="taginput">{tool}</div>)}
    </div>
  )
}

export default ToolList;

