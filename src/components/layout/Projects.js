import React from "react";
import ContactKeeper from "../images/ContactKeeper.png";
import Workstation from "../images/Workstation.png";
import GithubFinder from "../images/GithubFinder.png";
import CryptoApp from "../images/CryptoApp.png";
import SimonGame from "../images/SimonGame.png";
import proshop from "../images/proshop.png";
import Aos from "aos";

const Projects = () => {
  Aos.init();

  return (
    <div className="projects-section all-center" id="projects">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <h1 className="large text-600">Projects</h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="small-hr"
      ></div>
      <div className="projects grid-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div className="project-container">
            <div className="project">
              <img src={proshop} />
              <div className="project-details">
                <h5>ProShop</h5>
                <p className="text-grey">Full Stack MERN Application</p>
                <ul className="text-grey">
                  <li>E-commerce website</li>
                  <li>Shopping cart, reviews</li>
                  <li>User profile / authentication</li>
                  <li>Admin user, product, order management</li>
                  <li>Checkout, paypal/credit card integration</li>
                </ul>
              </div>
            </div>
            <div className="project-icon-1">
              <a href="https://github.com/Tridibesh01/Proshop">
                <button className="btn btn-outline-primary">Github</button>
              </a>
            </div>
            <div className="project-icon-2">
              <a href="https://proshopapp4321.herokuapp.com/">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div className="project-container">
            <div className="project">
              <img src={ContactKeeper} />
              <div className="project-details">
                <h5>Contact Keeper</h5>
                <p className="text-grey">MERN Stack Project</p>
                <ul className="text-grey">
                  <li>App to manage contacts</li>
                  <li>React, Context API</li>
                  <li>Authentication, JWT Token</li>
                  <li>NodeJs, MongoDB</li>
                </ul>
              </div>
            </div>
            <div className="project-icon-1">
              <a href="https://github.com/Tridibesh01/contact-keeper">
                <button className="btn btn-outline-primary">Github</button>
              </a>
            </div>
            <div className="project-icon-2">
              <a href="https://protected-citadel-16727.herokuapp.com/login">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="project-container">
            <div className="project">
              <img src={Workstation} />
              <div className="project-details">
                <h5>Workstation</h5>
                <p className="text-grey">Full Stack Project</p>
                <ul className="text-grey">
                  <li>Notes/Lists, Weather Info</li>
                  <li>HTML, CSS, Javascript</li>
                  <li>NodeJs, Express, MongoDB</li>
                  <li>Authentication</li>
                </ul>
              </div>
            </div>
            <div className="project-icon-1">
              <a href="">
                <button className="btn btn-outline-primary">Github</button>
              </a>
            </div>
            <div className="project-icon-2">
              <a href="https://stark-depths-86039.herokuapp.com/">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="project-container">
            <div className="project">
              <img src={GithubFinder} />
              <div className="project-details">
                <h5>Github Finder</h5>
                <p className="text-grey">React Project</p>
                <ul className="text-grey">
                  <li>Search users, get user info</li>
                  <li>React FrontEnd</li>
                  <li>Github API</li>
                  <li>Uses States/Hooks</li>
                </ul>
              </div>
            </div>
            <div className="project-icon-1">
              <a href="https://github.com/Tridibesh01/Github-Finder">
                <button className="btn btn-outline-primary">Github</button>
              </a>
            </div>
            <div className="project-icon-2">
              <a href="https://githubfinder5547659.netlify.app/">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="project-container">
            <div className="project">
              <img src={CryptoApp} />
              <div className="project-details">
                <h5>Crypto App</h5>
                <p className="text-grey">React Project</p>
                <ul className="text-grey">
                  <li>Search currency</li>
                  <li>React FrontEnd</li>
                  <li>Cryptocurrency API</li>
                  <li>Uses States/Hooks</li>
                </ul>
              </div>
            </div>
            <div className="project-icon-1">
              <a href="https://github.com/Tridibesh01/crypto-app">
                <button className="btn btn-outline-primary">Github</button>
              </a>
            </div>
            <div className="project-icon-2">
              <a href="https://cryptoapp4321.herokuapp.com/">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="project-container">
            <div className="project">
              <img src={SimonGame} />
              <div className="project-details">
                <h5>Simon Game</h5>
                <p className="text-grey">HTML-CSS-Javascript</p>
                <ul className="text-grey">
                  <li>Game to test user's memory power</li>
                  <li>Uses HTML, CSS, Javascript</li>
                </ul>
              </div>
            </div>
            <div className="project-icon-1">
              <a href="https://github.com/Tridibesh01/Simon-Game">
                <button className="btn btn-outline-primary">Github</button>
              </a>
            </div>
            <div className="project-icon-2">
              <a href="https://github.com/Tridibesh01/Simon-Game">
                {/* <a href="https://tridibesh01.github.io/Simon-Game/"> */}
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
