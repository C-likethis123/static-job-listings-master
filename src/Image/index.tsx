import React from 'react';

import styles from './index.module.css';

type ImageProps = {
  src: string;
}

const Image: React.FC<ImageProps> = ({src}) => {
  //@ts-ignore
  return (<img src={src} className={styles.logo} alt={`image from ${src}`} />);
}

export default Image;

