import React from 'react';

import data from "src/data.json";

const JobList: React.FC = () => {
  return (<div>
    {data.map(({position}) => <div>{position}</div>)}
  </div>);
};

export default JobList;
