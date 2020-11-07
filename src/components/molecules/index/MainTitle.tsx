import React, { FC } from 'react';
import TitleLogo from '../../atoms/index/TitleLogo';

const MainTitle: FC = () => {
  return (
    <h1>
      <a href="/">
        <TitleLogo />
      </a>
    </h1>
  );
};

export default MainTitle;
