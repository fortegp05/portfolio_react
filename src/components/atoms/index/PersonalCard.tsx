import React, { FC } from 'react';
import './PersonalCard.css';

const PersonalCard: FC = () => {
  return (
    <>
      <div className="personal_card">
        <a
          href="https://twitter.com/FORTEgp05"
          target="_blank"
          rel="noopener noreferrer"
          className="a_no_line"
        >
          <img src="images/FORTE.jpg" className="circle_icon" alt="" />
          <p className="title">X(旧Twitter)</p>
          <p>ご連絡はX(旧Twitter)のDMよりお願いします。</p>
        </a>
      </div>
      <div className="personal_card">
        <a
          href="https://bsky.app/profile/fortegp05.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="a_no_line"
        >
          <img src="images/FORTE.jpg" className="circle_icon" alt="" />
          <p className="title">bluesky</p>
          <p>blueskyもやってます</p>
        </a>
      </div>
    </>
  );
};

export default PersonalCard;
