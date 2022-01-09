import React from "react";
import Lottie from "react-lottie";
import animationData from "../images/cat.json";
import Aos from "aos";
import "aos/dist/aos.css";

const Front = () => {
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
    <div id="home" className="front all-center">
      <div>
        <Lottie options={defaultOptions} height={300} />
      </div>
      {/* <div style={{ paddingBottom: '40px' }}>
          <AutoTyping
            active // <boolean>
            className='large text-300'
            textRef='Hello' // <string>
            writeSpeed={10} // <number>
            deleteSpeed={10} // <number>
            delayToWrite={1000} // <number>
            delayToDelete={2500} // <number>
          />
          <BlinkCursor
            className='large text-300'
            active // <boolean>
            blinkSpeed={500} // <number>
          />
        </div> */}
      <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
        <h1 className="x-large">I'm Tridibesh Naik.</h1>
        <h3>
          <span className="text-200 text-grey">A </span> Developer.
        </h3>

        <div className="social-container">
          <a href="https://www.linkedin.com/in/tridibesh-naik-859559183/">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" />
          </a>
          <a href="https://www.facebook.com/tridibesh.naik">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" />
          </a>
          <a href="https://github.com/Tridibesh01?tab=repositories">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Front;
