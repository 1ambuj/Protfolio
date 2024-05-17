
import Project1 from "../assets/images/youtubeClone.png"
import Github from "../assets/images/github.svg"
import Project2 from "../assets/images/instagram01.png"
import Project3 from "../assets/images/vanlife.png"
import "../App.css"
export default function Work() {
  return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          <div className="work__box">
            <div className="work__text">
              <h3>Youtube Clone</h3>
              <p>
              Designed a YouTube-like platform with easy search, customizable filters, and smooth scrolling, ensuring effortless content exploration tailored to individual preferences
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <div className="work__links">
                <a href="https://ambujyoutubeclone.netlify.app/" target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/1ambuj/YoutubeClone" title="View Source Code" target="_blank">
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
              <h3>Insta clone</h3>
              <p>
              Developed an Instagram clone like platform integrating features such as post uploading, editing, liking, delete post and robust user authentication. 
              </p>
              <ul className="work__list">

                <li>React</li>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>CSS</li>
                <li>Appwrite</li>
              </ul>

              <div className="work__links">
                <a href="https://rococo-pie-638e9b.netlify.app/sign-in" className="link__text" target="_blank">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/1ambuj/Instapostgram">
                  <img src={Github} className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={Project2} className="work__image instagram" alt="Project 2" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Vanlife App</h3>
              <p>
              Developed a multi-page Vanlife platform with user authentication and advanced filtering capabilities using React Router. Users can personalize their van life experience by filtering vans based on their conditions and preferences. Implemented secure authentication features to ensure user privacy and data integrity, enhancing the overall user experience and engagement.
              </p>
              <ul className="work__list">
                <li>Html</li>
                <li>css</li>
                <li>javascript</li>
                <li>React</li>
              </ul>
              <div className="work__links">
                <a href="https://thunderous-vanlife.netlify.app/" className="link__text" target="_blank">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/1ambuj/Vanlife_React_Project">
                  <img src={Github} className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={Project3} className="work__image vanlife" alt="Project 3"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
