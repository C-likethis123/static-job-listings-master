import React from 'react';

/** Styling */
import './index.css';

type FilterTagProps = {
  isCancelable: boolean;
  children: string;
}

const FilterTag: React.FC<FilterTagProps> = ({
  isCancelable,
  children,
  }) => {
  return <div className="taginput">{children}</div>
}

export default FilterTag;
