import React from 'react';

/** Components */
import ToolList from "src/ToolList";
import {NewTag, FeaturedTag} from "src/Tags";

import './index.css';

type JobProps = {
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const Job: React.FC<JobProps> = ({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobProps) => {
  return (
    <div className="container">
      {/* Image here */}
      <div>
        <div>
          <span className="company">{company}</span>
          {isNew && <NewTag />}
          {featured && <FeaturedTag />}
        </div>
        <div className="position-title">{position}</div>
        {/*<Trivia postedAt={postedAt} contract={contract} location={location} />
      */}
      </div>
      <ToolList role={role} languages={languages} tools={tools} level={level} />
    </div>
  )
}

export default Job;
