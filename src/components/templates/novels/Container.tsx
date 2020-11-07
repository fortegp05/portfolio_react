import React, { FC } from 'react';
import Contents from '../../organisms/novels/Contents';
import Toc from '../../atoms/Toc';
import useGetElements from '../../../hooks/useGetElements';

const Container: FC = () => {
  const elements = useGetElements()

  return (
    <div className="article_container">
      <div className="article_contents">
        <Contents />
        <Toc elements={elements}/>
      </div>
    </div>
  );
};

export default Container;
