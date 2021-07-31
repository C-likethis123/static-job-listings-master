import React from 'react';

/** Styles */
import styles from './index.module.css';

type ToolListProps = {
  children: React.ReactElement | React.ReactElement[],
}

const ToolList: React.FC<ToolListProps> = ({
  children,
}) => {
  return (
    <div className={styles.toollist}>
      {children}
    </div>
  )
}

export default ToolList;

