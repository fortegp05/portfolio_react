import React, { FC } from 'react';
import './ImageCard.css';

type Props = {
  link: string;
  imgFileName: string;
  title: string;
  text: string;
};

const ImageCard: FC<Props> = ({ link, imgFileName, title, text }) => {
  return (
    <div className="img_card">
      <a href={link} className="a_no_line">
        <img className="img_card_img" src={imgFileName} alt="" />
        <p className="img_card_title">{title}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </a>
    </div>
  );
};

export default ImageCard;
