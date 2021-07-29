import React, {useContext} from 'react';

/** Contexts */
import {FilterContext} from "src/FilterContext";

/** Data */
import data from "src/data.json";

/** Components */
import Job from "./Job";

const JobList: React.FC = () => {
  const {tags = []} = useContext(FilterContext);
  const filteredData = data.filter(({languages, tools, role, level}) => {
    const allInformation = [...languages, ...tools, role, level];
    return (tags.length === 0) || allInformation.some((value) => tags.includes(value));
  });

  return (
    <>
      {filteredData.map(({id, ...rest}) => <Job key={id} {...rest} />)}
    </>
  );
};

export default JobList;
