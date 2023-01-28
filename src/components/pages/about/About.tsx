import "./about.scss";
import { Typewriter } from "react-simple-typewriter";
//" Email: ciscodevelop@gmail.com", "Phone: +39 373 82 19 139", "Linkedin: ciscodevelop"
function About() {
  return (
    <div className="about-container" id="about">
      <div className="left">
        <div className="img-container">
          <img src="asset/ciscoImage.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>About Me</h2>
          <h1>
            <Typewriter
              loop={0}
              typeSpeed={190}
              deleteSpeed={90}
              delaySpeed={2500}
              cursor
              words={["Passion For Code", "Creativity", "Professional"]}
            />
          </h1>
          <p>
            Hello everyone, my name is Francesco Papa and I'm a web developer. I
            started out learning programming languages ​​like HTML, CSS, and
            JavaScript, and continued to broaden my skills over time, learning
            to work with major frameworks like React . I enjoy working on
            projects that require a combination of technical skills and
            creativity, and I am comfortable working alone or in a team. I have
            a strong understanding of web design principles including usability,
            accessibility and responsive layout, and I always use the latest
            technologies and methodologies to ensure my designs are cutting
            edge. Outside of work, I love to keep learning new things and always
            keep an eye out for the latest trends and technologies in the world
            of web development. Besides, I also love traveling and discovering
            new places. If you are looking for an experienced and creative web
            developer, please do not hesitate to contact me to discuss your next
            project. Thanks for visiting my website!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
