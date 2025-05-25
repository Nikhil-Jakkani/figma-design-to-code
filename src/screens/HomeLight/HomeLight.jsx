import React, { useState, useEffect } from "react";
import "./style.css";

export const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Clean up on unmount
    return () => document.body.classList.remove('dark-mode');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="home-light">
      <div className="div">
        <div className="navbar">
          <div className="text-wrapper">ANISH KUMAR SINHA</div>

          <div className="text-wrapper-2" onClick={() => window.scrollTo({top: 600, behavior: 'smooth'})} style={{cursor: 'pointer'}}>About</div>

          <div className="text-wrapper-3" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{cursor: 'pointer'}}>Home</div>

          <div className="text-wrapper-4" onClick={() => alert('Resume clicked!')} style={{cursor: 'pointer'}}>Resume</div>

          <div className="text-wrapper-5" onClick={() => window.scrollTo({top: 1200, behavior: 'smooth'})} style={{cursor: 'pointer'}}>Projects</div>

          <div className="text-wrapper-6" onClick={() => window.scrollTo({top: 1800, behavior: 'smooth'})} style={{cursor: 'pointer'}}>Skills</div>

          <div className="text-wrapper-7" onClick={() => window.scrollTo({top: 2400, behavior: 'smooth'})} style={{cursor: 'pointer'}}>Contact</div>

          <img
            className="logo"
            alt="Logo"
            src="https://c.animaapp.com/TpnpxrHP/img/logo.svg"
          />

          <img
            className="moon"
            alt="Moon"
            src={isDarkMode ? "https://c.animaapp.com/TpnpxrHP/img/sun.png" : "https://c.animaapp.com/TpnpxrHP/img/moon.png"}
            onClick={toggleDarkMode}
            style={{cursor: 'pointer'}}
          />
        </div>

        <div className="socials-links">
          <a href="https://t.me/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="telegram" alt="Telegram" src="https://c.animaapp.com/TpnpxrHP/img/telegram.png" style={{cursor: 'pointer'}} />
          </a>
          <a href="https://facebook.com/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="facebook" alt="Facebook" src="https://c.animaapp.com/TpnpxrHP/img/facebook.png" style={{cursor: 'pointer'}} />
          </a>
          <a href="https://instagram.com/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="instagram" alt="Instagram" src="https://c.animaapp.com/TpnpxrHP/img/instagram.png" style={{cursor: 'pointer'}} />
          </a>
          <a href="https://twitter.com/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="twitter" alt="Twitter" src="https://c.animaapp.com/TpnpxrHP/img/twitter.png" style={{cursor: 'pointer'}} />
          </a>
          <a href="https://github.com/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="git-hub" alt="Git hub" src="https://c.animaapp.com/TpnpxrHP/img/github.png" style={{cursor: 'pointer'}} />
          </a>
          <a href="https://linkedin.com/in/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="linked-in" alt="Linked in" src="https://c.animaapp.com/TpnpxrHP/img/linkedin.png" style={{cursor: 'pointer'}} />
          </a>
          <a href="https://kooapp.com/profile/anishkumarsinha" target="_blank" rel="noopener noreferrer">
            <img className="koo" alt="Koo" src="https://c.animaapp.com/TpnpxrHP/img/koo.png" style={{cursor: 'pointer'}} />
          </a>
        </div>

        <div className="overlap">
          <div className="email">
            <div className="text-wrapper-8">sinhaanishkumar@outlook.com</div>

            <img
              className="small-line"
              alt="Small line"
              src="https://c.animaapp.com/TpnpxrHP/img/small-line.svg"
            />
          </div>

          <div className="image">
            <div className="overlap-group">
              <img
                className="hero-background"
                alt="Hero background"
                src="https://c.animaapp.com/TpnpxrHP/img/hero-background.svg"
              />

              <img
                className="hero-image"
                alt="Hero image"
                src="https://c.animaapp.com/TpnpxrHP/img/hero-image.png"
              />
            </div>
          </div>
        </div>

        <div className="buttons">
          <div className="overlap-2">
            <a href="/cv.pdf" download>
              <img
                className="CV-button"
                alt="Cv button"
                src="https://c.animaapp.com/TpnpxrHP/img/cv-button.svg"
                style={{cursor: 'pointer'}}
              />
              <div className="text-wrapper-9" style={{cursor: 'pointer'}}>Download CV</div>
            </a>
            <a href="mailto:sinhaanishkumar@outlook.com">
              <img
                className="touch-button"
                alt="Touch button"
                src="https://c.animaapp.com/TpnpxrHP/img/touch-button.svg"
                style={{cursor: 'pointer'}}
              />
              <div className="text-wrapper-10" style={{cursor: 'pointer'}}>Get in Touch!</div>
            </a>
          </div>
        </div>

        <div className="tag-line">
          <p className="UI-UX-designer-front">
            UI/UX Designer, Front-End Developer &amp; Thinker.
            <br />
            Based in India.
          </p>
        </div>

        <div className="anish-wave">
          <div className="overlap-3">
            <img
              className="underline"
              alt="Underline"
              src="https://c.animaapp.com/TpnpxrHP/img/underline.svg"
            />

            <p className="i-m-anish">
              <span className="span">I’m</span>

              <span className="text-wrapper-11">&nbsp;</span>

              <span className="text-wrapper-12">Anish</span>
            </p>
          </div>

          <img
            className="wave"
            alt="Wave"
            src="https://c.animaapp.com/TpnpxrHP/img/wave.svg"
          />
        </div>

        <div className="hello">
          <div className="div-wrapper">
            <div className="text-wrapper-13">Hello!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
