import React from 'react';

/** Styling */
import './index.css';

type FilterTagProps = {
  isCancelable?: boolean;
  children: string;
}

const FilterTag: React.FC<FilterTagProps> = ({
  isCancelable = false,
  children,
}) => {
  const tagClassName = `taginput ${isCancelable ? 'cancelable' : ''}`;
  return <div className={tagClassName}>{children}</div>
}

export default FilterTag;
