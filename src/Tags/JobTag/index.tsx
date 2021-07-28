import React from 'react';

/** Styling */
import './index.css';
// TODO make tags cancelable
type JobTagProps = {
  children: string;
}

const JobTag: React.FC<JobTagProps> = ({
  children,
}) => {
  return <div className="taginput">{children}</div>
}

export default JobTag;
