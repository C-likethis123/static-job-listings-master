import React, {useContext} from 'react';

/** Contexts */
import {FilterContext} from "src/FilterContext";

/** Styling */
import './index.css';

type FilterTagProps = {
  children: string;
}

const FilterTag: React.FC<FilterTagProps> = ({
  children,
}) => {
  const {handleDelete} = useContext(FilterContext);
  return (
    <span className="tagcontainer">
      <span className="tagcontent">{children}</span>
      <span className="cancel" onClick={() => handleDelete(children)}>X</span>
    </span>
  );
};

export default FilterTag;
