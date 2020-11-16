import React from 'react';
import { 
  ProjectsList,
  ProjectsItem,
  ProjectsLink,
  ProjectsImg
} from './ProjectsStyled';

const Projects = (props) => {
  const {
    data,
    onClose,
  } = props;

  let dataMarkup;

  if(data) {
    dataMarkup = data.map((item, index) => {
      return (
        <ProjectsItem key={index}>
          <ProjectsImg src={item.icon} alt={item.title} />
          <ProjectsLink 
            href={item.src} 
            title={item.title}
            onClick={onClose}
          >
            <span>
              {item.title}
            </span>
          </ProjectsLink>
        </ProjectsItem>
      )
    });
  }

  return (
    <ProjectsList>
      { dataMarkup }
    </ProjectsList>
  );
};

export default Projects;
