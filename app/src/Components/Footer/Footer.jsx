import React, { useContext } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../../App.css"

import { MyContext } from '../../Context/ScreenSizeProvider';

const Footer = () => {

  const {isMobile}=useContext(MyContext);

  return (
    <div className={!isMobile?'footer':'footer-mobile'}>
        <h4 id='footer-name'>Other Contact Platform's</h4>
        <div className='footer-icon'>
            <a title="LinkedIn Profile"  href="https://www.linkedin.com/in/shubham-240999-gupta/"><LinkedInIcon className='footer_icon'/></a>
            <a title="Github Profile" href="https://github.com/Shubham24999"><GitHubIcon className='footer_icon'/></a>
            <a title="YT Profile" href="https://www.youtube.com/channel/UCBYFf3SrC24boYNFLJjnMSA"><YouTubeIcon className='footer_icon'/></a>
            <a title="Insta Profile" href="https://www.instagram.com/shubham.show_learn_and_grow/"><InstagramIcon /></a>
        </div>
    </div>
  )
}

export default Footer