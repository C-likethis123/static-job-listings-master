import React from 'react';

import './index.css';

type ImageProps = {
  src: string;
}

const Image: React.FC<ImageProps> = ({src}) => {
  const imgUrl = new URL(src, import.meta.url);
  //@ts-ignore
  return (<img src={imgUrl} className="logo" />);
}

export default Image;

