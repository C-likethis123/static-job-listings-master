import React from 'react';

/** Types */
import './index.css';

type ToolListProps = {
  children: React.ReactElement | React.ReactElement[],
}

const ToolList: React.FC<ToolListProps> = ({
  children,
}) => {
  return (
    <div className="toollist">
      {children}
    </div>
  )
}

export default ToolList;

