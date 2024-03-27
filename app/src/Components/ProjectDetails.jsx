import React, { useContext } from 'react'

import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import "../App.css";

import { MyContext } from '../Context/ScreenSizeProvider';

const ProjectDetails = ({ props }) => {

  // console.log(props);

  const { title, blogLink, isBlog, description, ghLink, demoLink, ytLink, techStack } = props;

  const { isMobile } = useContext(MyContext);

  return (
    <div className="single-project">
      <h3 className='tit'>{title}</h3>
      <p className='desc'>{description}</p>
      <h5 className='tech-stack'>Tech Stack :-{techStack}</h5>
      {isBlog && <a href={blogLink} title='Blog' className='pr-icon'><ChromeReaderModeIcon /></a>}
      {<a href={ghLink} title="GitHub" className='pr-icon'><GitHubIcon /></a>}
      {<a href={demoLink} title="Demo" className='pr-icon'><FeaturedVideoIcon /></a>}
      {<a href={ytLink} title="Yt" className='pr-icon'><YouTubeIcon /></a>}
    </div>
  );
}

export default ProjectDetails


