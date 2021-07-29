import React, {useContext, useState} from 'react';
import {FilterContext} from 'src/FilterContext';

/** Styling */
import './index.css';

type JobTagProps = {
  children: string;
}

const JobTag: React.FC<JobTagProps> = ({
  children,
}) => {
  const [selected, setSelected] = useState(false);
  const {handleAdd, handleDelete} = useContext(FilterContext);
  const handleClick = () => {
    !selected ? handleAdd(children) : handleDelete(children);
    setSelected(!selected);
  };
  return <div className="taginput" onClick={handleClick}>{children}</div>
}

export default JobTag;
