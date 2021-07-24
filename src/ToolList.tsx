import React from 'react';

const ToolList: React.FC = ({tools, role, level}) => {
  return (
    <div>
      <div>{role}</div>
      <div>{level}</div>
      {tools.map((tool) => <div>{tool}</div>)}
    </div>
  )
}

export default ToolList;

