import React from 'react';

/** Components */
import ToolList from "src/ToolList";
import {NewTag, FeaturedTag} from "src/Tags";
import Image from "src/Image";
import JobTag from "src/Tags/JobTag";

/** Styles */
import styles from './index.module.css';

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
    <div className={styles.container}>
      <div className={styles.position}>
        <Image src={logo} />
        <div className={styles.positionInformation}>
          <div>
            <span className={styles.company}>{company}</span>
            {isNew && <NewTag />}
            {featured && <FeaturedTag />}
          </div>
          <div className={styles.positionTitle}>{position}</div>
          <div className={styles.trivia}>
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <ToolList>
        {tags.map(tag => <JobTag key={tag}>{tag}</JobTag>)}
      </ToolList>
    </div>
  )
}

export default Job;
