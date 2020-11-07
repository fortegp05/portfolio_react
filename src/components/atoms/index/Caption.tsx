import React, { FC } from 'react';
import './Caption.css';

type Props = {
  caption: string;
  logoName: string;
};

const Caption: FC<Props> = ({ caption, logoName }) => {
  return (
    <h2 className="caption">
      <img className="caption_logo" src={`images/${logoName}.png`} alt="" />
      {caption}
    </h2>
  );
};

export default Caption;
