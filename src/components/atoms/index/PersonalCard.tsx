import React, { FC } from 'react';
import './PersonalCard.css';

const PersonalCard: FC = () => {
  return (
    <>
      <div className="personal_card">
        <a
          href="https://fortegp05.hatenablog.com/entry/2024/08/18/191629"
          target="_blank"
          rel="noopener noreferrer"
          className="a_no_line"
        >
          <img src="images/FORTE.jpg" className="circle_icon" alt="" />
          <p className="title">お仕事のご依頼はこちらから!</p>
        </a>
      </div>
      <div className="personal_card">
        <a
          href="https://twitter.com/FORTEgp05"
          target="_blank"
          rel="noopener noreferrer"
          className="a_no_line"
        >
          <img src="images/FORTE.jpg" className="circle_icon" alt="" />
          <p className="title">X(旧Twitter)</p>
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
        </a>
      </div>
      <div className="personal_card">
        <a
          href="https://mixi.social/@fortegp05"
          target="_blank"
          rel="noopener noreferrer"
          className="a_no_line"
        >
          <img src="images/FORTE.jpg" className="circle_icon" alt="" />
          <p className="title">mixi2(最近の日常はこちら)</p>
        </a>
      </div>
    </>
  );
};

export default PersonalCard;
