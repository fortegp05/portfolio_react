import React, { FC } from 'react';
import ImageCard from '../../atoms/index/ImageCard';
import ProjectDatas from '../../../data/Projects'

const Projects: FC = () => {
  const projects = ProjectDatas;

  return (
    <div>
      {projects.map((project) => (
        <ImageCard
          key={project.id}
          link={project.link}
          imgFileName={project.imgFileName}
          title={project.title}
          text={project.text}
        />
      ))}
    </div>
  );
};

export default Projects;
