import React, { FC } from 'react';
import Pankuzu from '../atoms/Pankuzu';
import './ArticleHeader.css';

type Props = {
  pageTitle: string;
};

const ArticleHeader: FC<Props> = ({ pageTitle }) => {
  return (
    <header
      className="articleHeader"
      style={{
        background: `linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 0, 0)) fixed, url(images/mainimg.jpg) fixed`,
      }}
    >
      <h1 className="article_h1">{pageTitle}</h1>
      <Pankuzu pageTitle={pageTitle} />
    </header>
  );
};

export default ArticleHeader;
