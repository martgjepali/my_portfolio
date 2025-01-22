import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/auto-express.png";
import mock07 from "../assets/images/sentiment-tool.png";
import mock08 from "../assets/images/speech-rec.png";
import mock09 from "../assets/images/afterdark.jpeg";
import mock10 from "../assets/images/top-travel.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.top-travel.uk/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.top-travel.uk/" target="_blank" rel="noreferrer">
            <h2>Top Travel</h2>
          </a>
          <p>
            An online travel agency web app created with React JS and FastAPI
            (Python) and MySQL for database
          </p>
        </div>
        <div className="project">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AfterDark</h2>
          </a>
          <p>
            A web app for advertising Tirana night life events and much more.
            Made with React JS and FastAPI (Python) and MySQL for database.
          </p>
        </div>
        <div className="project">
          <a
            href="https://speech-recognition-2xekclgt3-martgjepali.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://speech-recognition-2xekclgt3-martgjepali.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Speech Recognition</h2>
          </a>
          <p>
            This project's aim is to develop a lightweight and efficient speech
            recognition system using pure JavaScript. The system is capable of
            converting spoken language into text in real-time, providing a
            user-friendly interface for voice-driven applications on web
            platforms.
          </p>
        </div>
        <div className="project">
          <a
            href="https://sentiment-ai-tool-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://sentiment-ai-tool-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Senitment A.I tool</h2>
          </a>
          <p>
            The Sentiment AI Analyzer is an educational tool designed to
            interpret and analyze the emotional tone behind text inputs using
            machine learning algorithms. This application leverages Python for
            backend operations and training the data set, FastAPI for handling API requests, and React for
            creating an interactive web frontend.
          </p>
        </div>
        <div className="project">
          <a href="https://autoexpress-rentals.com" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://autoexpress-rentals.com" target="_blank" rel="noreferrer">
            <h2>Online Car Rental Website</h2>
          </a>
          <p>
            A website for renting a car online made with WordPress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
