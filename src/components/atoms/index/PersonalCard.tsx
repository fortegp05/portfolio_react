import React, { FC } from 'react';
import './PersonalCard.css';

const PersonalCard: FC = () => {
  return (
    <div className="personal_card">
      <a
        href="https://twitter.com/FORTEgp05"
        target="_blank"
        rel="noopener noreferrer"
        className="a_no_line"
      >
        <img src="images/FORTE.jpg" className="circle_icon" alt="" />
        <p className="title">Twitter</p>
        <p>ご連絡はTwitterのDMよりお願いします。</p>
      </a>
    </div>
  );
};

export default PersonalCard;
