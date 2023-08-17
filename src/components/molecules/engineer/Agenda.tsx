import React, { FC } from 'react';
import ProgramingSkills from '../../atoms/engineer/ProgramingSkills';
import SoftwareDevelopment from '../../atoms/engineer/SoftwareDevelopment';
import JobCareer from '../../atoms/engineer/JobCareer';
import Qualification from '../../atoms/engineer/Qualification';
import Outputs from '../../atoms/engineer/Outputs';
import Slides from '../../atoms/engineer/Slides';
import TechBooks from '../../atoms/engineer/TechBooks';
import Podcast from '../../atoms/engineer/Podcast';
import Blog from '../../atoms/engineer/Blog'


const Agenda: FC = () => {
  return (
    <>
      <h2>職務経歴の概要</h2>
      <div className="update_date">2023年08月現在</div>
      <SoftwareDevelopment />
      <ProgramingSkills />
      <JobCareer />
      <Qualification />
      <Outputs />
      <Slides />
      <TechBooks />
      <Podcast />
      <Blog />
    </>
  );
};

export default Agenda;
