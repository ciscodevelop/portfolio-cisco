import { useEffect, useRef } from "react";
import "./home.scss";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  console.log('passed');
  
  return (
    <div className="home-container" id="home">
      <div className="left">
        <div className="img-container">
          <img src="asset/pngwing.com.png" alt="developer" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello Everyone, I'm</h2>
          <h1>Cisco</h1>
          <h3>
            Freelance 
            <span>
              <Typewriter
                loop={0}
                typeSpeed={190}
                deleteSpeed={90}
                delaySpeed={2500}
                cursor
                words={[" Developer", " Web Design", " Content Creator"]}
              />
            </span>
          </h3>
        </div>
        <a href="#skills">
          <img src="asset/DownArrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Home;
