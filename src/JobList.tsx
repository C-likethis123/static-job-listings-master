import React from 'react';

import data from "src/data.json";
import Job from "./Job";
const JobList: React.FC = () => {
  return (<div>
    {data.map(({id, ...rest}) => <Job key={id} {...rest} />)}
  </div>);
};

export default JobList;
