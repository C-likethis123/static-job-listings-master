import React from 'react';

import './index.css';

type ImageProps = {
  src: string;
}

const Image: React.FC<ImageProps> = ({src}) => {
  const imgUrl = new URL(src, import.meta.url);
  //@ts-ignore
  return (<img src={imgUrl} width={88} height={88} />);
}

export default Image;
