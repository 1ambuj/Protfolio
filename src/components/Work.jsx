import React from 'react';
import Project1 from "../assets/images/dashboard-2.png"
import Github from "../assets/images/github.svg"
import Project2 from "../assets/images/password.jpg"
import Project3 from "../assets/images/quiz.jpg"
import "../App.css"
export default function Work() {
  return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          <div className="work__box">
            <div className="work__text">
              <h3>Personal Dashboard</h3>
              <p>
                A Chrome extension to help you focus and stay up-to-date.
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <div className="work__links">
                <a href="https://nisar.surge.sh" target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/nisarhassan12/portfolio" title="View Source Code" target="_blank">
                  <img src={Github} className="work__code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={Project1} className="work__image" alt="Project 1" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Password Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.
              </p>
              <ul className="work__list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>

              <div className="work__links">
                <a href="#" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="#">
                  <img src={Github} className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={Project2} className="work__image" alt="Project 2" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Quizzical App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.
              </p>
              <ul className="work__list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>
              <div className="work__links">
                <a href="#" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="#">
                  <img src={Github} className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={Project3} className="work__image" alt="Project 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
