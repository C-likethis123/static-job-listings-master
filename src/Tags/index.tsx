import React from 'react';

import './index.css';

const NewTag: React.FC = () => (
  <span className="tag new">NEW!</span>
);

const FeaturedTag: React.FC = () => (
  <span className="tag featured">FEATURED</span>
);

export {NewTag, FeaturedTag};
