import React from "react";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Aos from "aos";

const Skills = () => {
  Aos.init();

  return (
    <div className="skill-section all-center" id="skills">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="large text-600"
      >
        Skills
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="small-hr"
      ></div>
      <div className="grid-2">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="skill">
            <div className="text-grey all-center skill-icon">
              <DesktopWindowsIcon
                style={{ fontSize: "2.5rem", fontWeight: "1px" }}
              />
            </div>
            <h5>Web Development</h5>
            <div className="text-grey">
              <ul>
                <li>HTML, CSS, Javascript</li>
                <li>NodeJs, Express, MongoDB</li>
                <li>React</li>
                <li>UI/UX designing</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div className="skill">
            <div className="text-grey all-center skill-icon">
              <BorderColorOutlinedIcon
                style={{ fontSize: "2.5rem", fontWeight: "1px" }}
              />
            </div>
            <h5>Data Structures & Algorithms</h5>
            <div className="text-grey">
              <p>Programming Languages</p>
              <p>C++ | C | Java</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
