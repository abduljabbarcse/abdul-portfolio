import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      // Customize AOS initialization options here if needed
    });
  }, []);
  return (
    <section id="AboutMe" className="about--section">
      <div
        className="about--section--img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src="./img/ab1.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Get To Know More</p>
          <h1 className="skills-section--heading">About Me</h1>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src="./img/experience.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ years <br />
                  Frontend Development
                </p>
              </div>
              <div class="details-container">
                <img
                  src="./img/education.png"
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  B.E. Bachelors Degree
                  <br />
                  Computer Science
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                Hello, I'm Abdul Jabbar, a proactive and passionate Computer
                Science and Engineering graduate with a strong inclination for
                innovative problem-solving and web development. Equipped with a
                solid foundation in technical skills and interpersonal
                abilities, I'm enthusiastic about contributing to the world of
                technology. I'm a quick learner and a team player who is always
                eager to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
