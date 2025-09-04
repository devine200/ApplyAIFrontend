import React from 'react'
import "../../styles/Resume/resume3.css"

const Resume3 = () => {
  return (
    <div className="page resume3">
      <h1>Samuel Emeh</h1>
      <div className="contact">+234 903 046 8674 | samuelemeh200@gmail.com | Lagos, Nigeria | linkedin.com/in/samuel-emeh-8456b717b | github.com/devine200</div>

      <div className="grid section">
        <div className="left">Professional Summary</div>
        <div>
          Full-Stack Engineer and LLM Developer with expertise in <strong>Python, Django, React, and TypeScript</strong>, experienced in building scalable applications, AI integrations, and blockchain solutions. Skilled at optimizing backend performance, developing responsive frontends, and deploying secure systems on <strong>AWS, GCP, and Docker</strong>. Proven ability to <strong>lead teams, unblock developers, and deliver production-ready solutions</strong>, with successful projects at <strong>Outsella, Tradable, and Melscape</strong>.
        </div>
      </div>

      <div className="grid section">
        <div className="left">Education</div>
        <div>
          <h3>Nnamdi Azikiwe University <span className="right-align">September 2017 - July 2023</span></h3>
          <em>Bachelor's, Electronic and Computer Engineering</em>
        </div>
      </div>

      <div className="grid section">
        <div className="left">Professional Experience</div>
        <div>
          <h3>Tradable <span className="right-align">Remote | June 2022 - Present</span></h3>
          <p className="role">Lead Full-Stack Web3 Engineer</p>
          <ul>
            <li>Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic.</li>
            <li>Built REST API endpoints using Django and Django Rest Framework, achieving a 30% improvement in backend response times.</li>
            <li>Configured server instances with Gunicorn, Nginx, and SSL certificates via Let’s Encrypt for secure deployments.</li>
            <li>Designed, developed, and tested smart contracts with Solidity, integrating gasless transactions using Gelato Relay SDK.</li>
            <li>Simulated over 100 smart contract transactions with Tenderly, increasing transaction efficiency by 40%.</li>
            <li>Delivered responsive and dynamic frontends using Next.js, Redux Toolkit, and Redux-Persist, enhancing user experience and engagement by 25%.</li>
            <li>Supported 50+ decentralized applications (DApps) and designed a cross-chain decentralized exchange order book, achieving 100% compatibility across blockchain networks.</li>
          </ul>

          <h3>Melscape <span className="right-align">Remote | May 2024 - June 2024</span></h3>
          <p className="role">Full-Stack Web Developer | CMS & SEO Specialist</p>
          <ul>
            <li>Built websites with appointment booking, live chat, GTranslate API, and blog features, increasing client efficiency by 40%.</li>
            <li>Developed a custom CMS using Django, enabling seamless content management with clear usage guides.</li>
            <li>Implemented SEO strategies with Google Console, Calendly integration, and Google Business setup, boosting visibility and engagement by 35%.</li>
            <li>Configured backend servers with Gunicorn, Nginx, and SSL certificates via Let’s Encrypt, ensuring 99.9% uptime.</li>
            <li>Designed responsive, user-friendly interfaces with HTML, CSS, JavaScript, jQuery, and LightBox Carousel, enhancing UX by 25%.</li>
          </ul>
        </div>
      </div>
      <div className="grid section">
        <div className="left">Projects & Outside Experience</div>
        <div>
          <h3>Artemble <span className="right-align">Remote | January 2022 - May 2022</span></h3>
          <p className="role">Fullstack Web3 Engineer</p>
          <ul>
            <li>Designed and deployed an Ethereum-based NFT presale smart contract, integrating minting and whitelist functionality, enabling secure sale of over 5,000 NFTs.</li>
            <li>Connected the smart contract with the website front end, achieving a 98% transaction success rate during presale.</li>
            <li>Configured metadata and ERC-721/1155 standards for OpenSea listing, boosting visibility and resulting in 30% higher sales within the first week.</li>
          </ul>
        </div>
      </div>

      <div className="grid section">
        <div className="left">Skills</div>
        <div>
          <strong>Skills:</strong> Python, TypeScript, JavaScript, Django, Solidity, Rust, HTML/CSS, Node.js, Express.js, MySQL, Nginx, Redis
        </div>
      </div>

      <div className="grid section">
        <div className="left">Interests</div>
        <div>Playing Games</div>
      </div>
    </div>
  )
}

export default Resume3