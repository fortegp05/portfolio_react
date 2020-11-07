import React, { FC } from 'react';
import Caption from '../../atoms/index/Caption';
import PersonalCard from '../../atoms/index/PersonalCard';
import Projects from '../../molecules/index/Projects';
import SelfIntroduction from '../../molecules/index/SelfIntroduction';

const Contents: FC = () => {
  return (
    <>
      <section id="AreaProfile">
        <Caption caption="Profile" logoName="human" />
        <SelfIntroduction />
      </section>
      <section id="AreaProject">
        <Caption caption="Project" logoName="hammer" />
        <Projects />
      </section>
      <section id="AreaContact">
        <Caption caption="Contact" logoName="mail" />
        <PersonalCard />
      </section>
    </>
  );
};

export default Contents;
