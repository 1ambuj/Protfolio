import React from "react"
import Linkdin from "../assets/images/linkedin.svg"
import Github from "../assets/images/github.svg"
import "../App.css"
export default function Footer(){
    return (
        <footer role="contentinfo" className="footer">
            <div className="row">
            <ul className="footer__social-links">
                <li className="footer__social-link-item">
                <a href="https://github.com/nisarhassan12/" title="Link to Github Profile">
                    <img src={Github} className="footer__social-image" alt="Github" />
                </a>
                </li>
                
                <li className="footer__social-link-item">
                <a href="https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/">
                    <img src={Linkdin} title="Link to Linkedin Profile" className="footer__social-image" alt="Linkedin" />
                </a>
                </li>
            </ul>
        </div>
      </footer>
    )
}