import React, { FC, useEffect } from 'react';
import MainHeader from '../../organisms/index/MainHeader';
import MenuBar from '../../atoms/index/MenuBar';
import updateHeadTagInfo from '../../../HeadUtil';
import Container from '../../templates/index/Container';
import Footer from '../../atoms/Footer';
import FabScrollToTop from '../../atoms/FabScrollToTop';

const Body: FC = () => {
  useEffect(() => {
    updateHeadTagInfo({
      title: 'FORTE',
      description: 'FORTE(@FORTEgp05)のポートフォリオです',
      twitterDescription: '@FORTEgp05 のポートフォリオサイト。',
      ogType: 'website',
      ogDescription: 'FORTE(@FORTEgp05)のポートフォリオです',
    });
  });

  return (
    <>
      <MainHeader />
      <MenuBar />
      <Container />
      <Footer />
      <FabScrollToTop />
    </>
  );
};

export default Body;
