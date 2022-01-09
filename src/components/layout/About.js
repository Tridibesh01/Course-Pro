import React from "react";
import Lottie from "react-lottie";
import animationData from "../images/skateboarding.json";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  Aos.init();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="about-section" id="about">
      <div className="grid-2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          className="all-center"
        >
          <div className="lottie">
            <Lottie options={defaultOptions} height={550} />
          </div>
        </div>
        <div className="about p-1">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h1 className="large text-600" style={{ marginBottom: "0px" }}>
              About Me
            </h1>
            <h5 className="text-400 text-grey"> Front-End Developer,</h5>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-grey"
          >
            A 3rd Year student of IIT Kharagpur, India. I am proficient in Front
            End Development with experience in Back End Technologies. I have
            done projects on Mern Stack, UI/UX Designing and more.{" "}
          </p>
          <div>
            <a href="#contact">
              <buttton
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                type="button"
                className="btn btn-lg btn-primary"
              >
                Contact
              </buttton>
            </a>
            <a href="">
              <buttton
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="true"
                type="button"
                className="btn btn-lg btn-outline-primary"
              >
                Resume
              </buttton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
