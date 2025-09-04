import React from 'react'
import "../../styles/Resume/resume2.css"


const resume2 = () => {
  return (
    <div className="container page resume2">
      <div className="header">
        <h1>Samuel Emeh</h1>
        <p>
          +234 903 046 8674 |
          <a href="mailto:samuelemeh200@gmail.com">samuelemeh200@gmail.com</a> | Lagos, Nigeria |
          <a href="https://www.linkedin.com/in/samuel-emeh-8456b717b">LinkedIn</a> |
          <a href="https://github.com/devine200">GitHub</a>
        </p>
      </div>

      <h2>Professional Summary</h2>
      <p>
        Full-Stack Engineer and LLM Developer with expertise in
        <strong>Python, Django, React, and TypeScript</strong>, experienced in building scalable applications, AI integrations, and blockchain solutions. Skilled at optimizing backend performance, developing responsive frontends, and deploying secure systems on <strong>AWS, GCP, and Docker</strong>. Proven ability to
        <strong>lead teams, unblock developers, and deliver production-ready solutions</strong>, with successful projects at
        <strong>Outsella, Tradable, and Melscape</strong>.
      </p>

      <h2>Education</h2>
      <div className="row">
        <p>
          <strong>Nnamdi Azikiwe University</strong><br /><em>Bachelor’s, Electronic and Computer Engineering</em>
        </p>
        <p className="muted">
          <em>September 2017 – July 2023</em>
        </p>
      </div>

      <h2>Professional Experience</h2>

      <div className="job">
        <div className="row">
          <h3>Lead Full-Stack Web3 Engineer — Tradable</h3>
          <p className="muted">
            <em>June 2022 – Present</em>
          </p>
        </div>
        <ul>
          <li>Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic.</li>
          <li>Built REST API endpoints using Django and Django REST Framework, achieving a 30% improvement in backend response times.</li>
          <li>Configured server instances with Gunicorn, Nginx, and SSL certificates via Let’s Encrypt for secure deployments.</li>
          <li>Designed, developed, and tested smart contracts with Solidity, integrating gasless transactions using Gelato Relay SDK to improve user experience.</li>
          <li>Simulated over 100 smart contract transactions for accurate testing and debugging with Tenderly, increasing transaction efficiency by 40%.</li>
          <li>Delivered responsive and dynamic frontends using Next.js, Redux Toolkit, and Redux-Persist, enhancing user experience and increasing engagement by 25%.</li>
          <li>Supported 50+ decentralized applications (DApps) and designed a cross-chain decentralized exchange order book, achieving 100% compatibility across blockchain networks.</li>
        </ul>
      </div>

      <div className="job">
        <div className="row">
          <h3>Full-Stack Web Developer | CMS &amp; SEO Specialist — Melscape</h3>
          <p className="muted">
            <em>May 2024 – June 2024</em>
          </p>
        </div>
        <ul>
          <li>Built websites with appointment booking, live chat, GTranslate API, and blog features, increasing client efficiency by 40%.</li>
          <li>Developed a custom CMS using Django, enabling seamless content management for clients with clear usage guides.</li>
          <li>Implemented SEO strategies with Google Console, Calendly integration, and Google Business setup, boosting visibility and engagement by 35%.</li>
          <li>Configured backend servers using Gunicorn, Nginx, and SSL certificates via Let’s Encrypt, ensuring 99.9% uptime and secure operations.</li>
          <li>Designed responsive, user-friendly interfaces with HTML, CSS, JavaScript, jQuery, and LightBox Carousel, enhancing UX and driving a 25% increase in site interaction.</li>
        </ul>
      </div>

      <h2>Projects &amp; Outside Experience</h2>
      <div className="job">
        <div className="row job-header">
          <div className="left">
            <strong>Artemble</strong><br />
            <em>Fullstack Web3 Engineer</em>
          </div>
          <div className="right">
            <strong>Remote</strong><br />
            <em>January 2022 – May 2022</em>
          </div>
        </div>
        <ul>
          <li>Designed and deployed an Ethereum-based NFT presale smart contract, integrating minting and whitelist functionality, which successfully facilitated the secure sale of over 5,000 NFTs.</li>
          <li>Connected the smart contract with the website front end, enabling seamless user interaction and achieving a 98% user transaction success rate during the presale.</li>
          <li>Configured metadata and ERC-721/1155 standards, ensuring full compatibility for OpenSea listing, which boosted visibility and resulted in 30% higher sales within the first week.</li>
        </ul>
      </div>

      <h2>Skills</h2>
      <p>
        <strong>Skills:</strong> Python, TypeScript, JavaScript, Django, Solidity, Rust, HTML/CSS, Node.js, Express.js, MySQL, Nginx, Redis
      </p>
      <p>
        <strong>Interests:</strong> Playing Games
      </p>
    </div>
  )
}

export default resume2