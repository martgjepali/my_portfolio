import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePicture from '../assets/images/work_picture.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
          <img src={profilePicture} alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/martgjepali" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mart-gjepali-25939019b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mart Gjepali</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/martgjepali" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mart-gjepali-25939019b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;