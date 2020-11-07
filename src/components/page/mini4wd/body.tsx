import React, { FC, useEffect } from 'react';
import updateHeadTagInfo from '../../../HeadUtil';
import FabScrollToTop from '../../atoms/FabScrollToTop';
import Footer from '../../atoms/Footer';
import ArticleHeader from '../../molecules/ArticleHeader';
import Container from '../../templates/mini4wd/Container';

const pageTitle = 'ミニ四駆';

const Body: FC = () => {
  useEffect(() => {
    updateHeadTagInfo({
      title: `FORTE - ${pageTitle}`,
      description: `FORTE(@FORTEgp05)のポートフォリオサイト、${pageTitle}に関するページです。`,
      twitterDescription: `FORTE(@FORTEgp05)のポートフォリオサイト、${pageTitle}に関するページです。`,
      ogType: 'article',
      ogDescription: `FORTE(@FORTEgp05)のポートフォリオサイト、${pageTitle}に関するページです。`,
    });
  });

  return (
    <>
      <ArticleHeader pageTitle={pageTitle} />
      <Container />
      <Footer />
      <FabScrollToTop />
    </>
  );
};

export default Body;
