import React from "react";
import "../../styles/Resume/resume4.css";

const Resume4 = () => {
  return (
    <div className="container page resume4">
      <div className="sidebar">
        <h1>Samuel Emeh</h1>
        <p>samuelem20c@gmail.com</p>
        <p>+234 903 046 8674</p>
        <p>Lagos, Nigeria</p>
        <a href="https://linkedin.com/in/samuel-emeh-8456d171b">
          linkedin.com/in/samuel-emeh-8456d171b
        </a>
        <a href="https://github.com/devine200">github.com/devine200</a>

        <h3>Interests</h3>
        <p>Playing Games</p>
      </div>

      <div className="main">
        <div className="summary">
          <div className="section-title">Professional Summary</div>
          <p>
            Full-Stack Engineer and LLM Developer with expertise in Python,
            Django, React, and TypeScript, experienced in building scalable
            applications, AI integrations, and blockchain solutions. Skilled at
            optimizing backend performance, developing responsive frontends, and
            deploying secure systems on AWS, GCP, and Docker. Proven ability to
            lead teams, unblock developers, and deliver production-ready
            solutions, with successful projects at Outsella, Tradable, and
            Melscape.
          </p>
        </div>

        <div className="education">
          <div className="section-title">Education</div>
          <p>
            <strong>Nnamdi Azikiwe University</strong>{" "}
            <span>September 2017 - July 2023</span>
          </p>
          <p>Bachelor’s, Electronic and Computer Engineering</p>
        </div>

        <div className="experience">
          <div className="section-title">Professional Experience</div>

          <div className="job">
            <h4>
              <span>Tradable - Lead Full-Stack Web3 Engineer</span>
              <span>June 2022 - Present | Remote</span>
            </h4>
            <ul>
              <li>
                Oversaw and optimized web services, smart contracts, and
                websites to maintain 99.9% uptime...
              </li>
              <li>
                Built REST API endpoints using Django and Django Rest
                Framework...
              </li>
              <li>
                Configured server instances with Gunicorn, Nginx, and SSL
                certificates...
              </li>
            </ul>
          </div>

          <div className="job">
            <h4>
              Melscape - Full-Stack Web Developer | CMS & SEO Specialist{" "}
              <span>May 2024 - June 2024 | Remote</span>
            </h4>
            <ul>
              <li>
                Built websites with appointment booking, live chat, GTtranslate
                API, and blog features...
              </li>
              <li>
                Implemented SEO strategies with Google Console, Calendly
                integration...
              </li>
            </ul>
          </div>

          <div className="job">
            <h4>
              BabylonDAO - Smart Contract Developer | Solana Blockchain Engineer{" "}
              <span>May 2021 - June 2022 | Remote</span>
            </h4>
            <ul>
              <li>
                Designed and implemented Solana smart contracts in Rust and
                TypeScript...
              </li>
              <li>
                Deployed and verified BabylonDAO token on Solana token
                listing...
              </li>
            </ul>
          </div>
        </div>

        <div className="projects">
          <div className="section-title">Projects & Outside Experience</div>
          <div className="job">
            <h4>
              Artemble - Fullstack Web3 Engineer{" "}
              <span>January 2022 - May 2022 | Remote</span>
            </h4>
            <ul>
              <li>
                Designed and deployed an Ethereum-based NFT presale smart
                contract...
              </li>
              <li>
                Connected smart contract with frontend, achieving a 98% success
                rate...
              </li>
            </ul>
          </div>
        </div>

        <div className="skills">
          <div className="section-title">Skills</div>
          <p className="skills-list">
            Python, TypeScript, JavaScript, Django, Solidity, Rust, HTML/CSS,
            Node.js, Express.js, MySQL, Nginx, Redis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume4;
