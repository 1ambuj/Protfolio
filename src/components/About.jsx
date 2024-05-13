import React from "react"
import Photo from "../assets/images/jane.jpg" 
export default function About() {
    return (
      <section className="about" id="about">
        <div className="row">
          <h2>About Me</h2>
          <div className="about__content">
            <div className="about__text">
              <p>
                I'm a web developer and designer based out of London, UK. I love
                building apps that solve real-world problems, and that are
                delightful to use. My specialties include TypeScript, React JS,
                Tailwind CSS, and Styled Components.
              </p>
              <p>
                My background is in teaching and marketing, and I have a
                bachelors degree in English from Kings College. I also have
                five adorable cats.
              </p>
              <a href="#" className="btn">
                My Resume
              </a>
            </div>
  
            <div className="about__photo-container">
              <img
                className="about__photo"
                src={Photo}
                alt="Jane's Photo"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  