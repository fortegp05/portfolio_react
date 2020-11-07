import React, { FC } from 'react';
import './Card.css';

type Props = {
  bgImgFileName: string;
  title: string;
  text: string;
  link: string;
};

const Card: FC<Props> = ({ bgImgFileName, title, text, link }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(../images/${bgImgFileName})`,
      }}
    >
      <a href={link} className="a_no_line">
        <p className="card_title">{title}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </a>
    </div>
  );
};

export default Card;
