
import Photo from "../assets/images/ambuj.jpeg" 
export default function About() {
    return (
      <section className="about" id="about">
        <div className="row">
          <h2>About Me</h2>
          <div className="about__content">
            <div className="about__text">
              <p>
                I am a web developer and designer based out of India. I love
                building apps that solve real-world problems, and that are
                delightful to use. My specialties include TypeScript, React JS, javascript
                Tailwind CSS, and Styled Components.
              </p>
              <p>
                 I have a
                bachelors degree in computer science  from B.B.S college of Aktu university. 
              </p>
              <a href="" className="btn">
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
  