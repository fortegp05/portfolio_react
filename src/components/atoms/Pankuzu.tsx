import React, { FC } from 'react';
import './Pankuzu.css';

type Props = {
  pageTitle: string;
};

const Pankuzu: FC<Props> = ({ pageTitle }) => {
  return (
    <ul className="pankuzu">
      <li>
        <a href="/">HOME</a>
      </li>
      <li>{pageTitle}</li>
    </ul>
  );
};

export default Pankuzu;
