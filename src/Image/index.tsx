import React from 'react';

import './index.css';

type ImageProps = {
  src: string;
}

const Image: React.FC<ImageProps> = ({src}) => {
  return (<img src={src} className={styles.logo} />);
}

export default Image;
