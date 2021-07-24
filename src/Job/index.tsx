import React from 'react';

/** Components */
import ToolList from "src/ToolList";
import {NewTag, FeaturedTag} from "src/Tags";
import Image from "src/Image";
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
      <Image src={logo} />
      <div>
        <div>
          <span className="company">{company}</span>
          {isNew && <NewTag />}
          {featured && <FeaturedTag />}
        </div>
        <div className="position-title">{position}</div>
        <div className="trivia">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <ToolList role={role} languages={languages} tools={tools} level={level} />
    </div>
  )
}

export default Job;
