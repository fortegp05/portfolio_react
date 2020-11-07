import React, { FC } from 'react';
import Card from '../../atoms/index/Card';
import './ProfileInformations.css';
import ProfileInformationDatas from '../../../data/ProfileInformations'

const ProfileInformations: FC = () => {
  const cards = ProfileInformationDatas

  return (
    <div className="profile_information_area">
      {cards.map((card) => (
        <Card
          key={card.id}
          bgImgFileName={card.backgroundImgFileName}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ProfileInformations;
