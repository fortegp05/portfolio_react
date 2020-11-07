import React, { FC } from 'react';
import MainTitle from '../../molecules/index/MainTitle';
import TitleBackgroundImg from '../../atoms/index/TitleBackgroundImg';
import './MainHeader.css';

const MainHeader: FC = () => {
  return (
    <header>
      <MainTitle />
      <TitleBackgroundImg />
    </header>
  );
};

export default MainHeader;
