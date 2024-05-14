import  { useEffect, useState } from "react";
import BackToUp from "../assets/images/arrow-up.svg";
import "../App.css";

export default function BackToTopButton() {
  const [isBackToTopRendered, setIsBackToTopRendered] = useState(false);

  const alterStyles = () => {
    const button = document.querySelector(".back-to-top");
    button.classList.toggle("visible", isBackToTopRendered);
  };

  const handleFirstTab = (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    document.body.classList.remove("user-is-tabbing");
    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleFirstTab);

    return () => {
      window.removeEventListener("keydown", handleFirstTab);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsBackToTopRendered(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    alterStyles();
  }, [isBackToTopRendered]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#top"
      className={`back-to-top ${isBackToTopRendered ? "visible" : "hidden"}`}
      title="Back to Top"
      onClick={scrollToTop}
    >
      <img src={BackToUp} alt="Back to Top" className="back-to-top__image" />
    </a>
  );
}
