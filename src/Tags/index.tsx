import React from 'react';

import styles from './index.module.css';

const NewTag: React.FC = () => (
  <span className={`${styles.tag} ${styles.new}`}>NEW!</span>
);

const FeaturedTag: React.FC = () => (
  <span className={`${styles.tag} ${styles.featured}`}>FEATURED</span>
);

export {NewTag, FeaturedTag};
