import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/martgjepali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/mart-gjepali-25939019b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Mart Gjepali. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
