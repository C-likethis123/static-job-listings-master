import React from 'react';

/** Components */
import ToolList from "src/ToolList";
import {NewTag, FeaturedTag} from "src/Tags";
import Image from "src/Image";
import FilterTag from "src/Tags/FilterTags";
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
  const tags = [role, level, ...languages, ...tools];
  return (
    <div className="container">
      <div className="position">
        <Image src={logo} />
        <div className="position-information">
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
      </div>
      <ToolList>
        {tags.map(tag => <FilterTag key={tag}>{tag}</FilterTag>)}
      </ToolList>
    </div>
  )
}

export default Job;
