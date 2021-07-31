import React, {useContext} from 'react';

/** Contexts */
import {FilterContext} from "src/FilterContext";

/** Styling */
import styles from './index.module.css';

type FilterTagProps = {
  children: string;
}

const FilterTag: React.FC<FilterTagProps> = ({
  children,
}) => {
  const {handleDelete} = useContext(FilterContext);
  return (
    <span className={styles.container}>
      <span className={styles.content}>{children}</span>
      <span className={styles.cancel} onClick={() => handleDelete(children)}>X</span>
    </span>
  );
};

export default FilterTag;
