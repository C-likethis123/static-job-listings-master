import React from 'react';

import styles from './index.module.css';

type ImageProps = {
  src: string;
}

const Image: React.FC<ImageProps> = ({src}) => {
  const imgUrl = new URL(src, import.meta.url);
  //@ts-ignore
  return (<img src={imgUrl} className={styles.logo} />);
}

export default Image;

