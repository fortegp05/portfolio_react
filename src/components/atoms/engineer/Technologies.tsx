import React, { FC } from 'react';
import './Technologies.css';

const Technologies: FC = () => {
  return (
    <>
      <h2>よく使う技術</h2>
      <div className="tile">
        <img className="skillLogo" src="images/java.png" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/android-icon.png" alt="" />
      </div>
      <div className="tile">
        <img className="slillLogoLong" src="images/php.png" alt="" />
      </div>
      <div className="tile">
        <img className="slillLogoLong" src="images/jquery.png" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/javascript.png" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/github-octocat.png" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/mysql.png" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/postgresql.png" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/react.svg" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/kotlin.svg" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/python.svg" alt="" />
      </div>
      <div className="tile">
        <img className="skillLogo" src="images/vue.svg" alt="" />
      </div>
    </>
  );
};

export default Technologies;
