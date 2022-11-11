import './Navigation.css';
import { social } from '../../data.js';

const Navigation = () => {
  return (
    <>
      <nav>
        <div id="nav-logo-section" className="nav-section">
          <h2 className="logo">James Park</h2>
        </div>
        <div id="nav-mobile-section">
          <div className="nav-section links-container">
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
            <a href="#">ARCHIVE</a>
          </div>
          <div className="social-container nav-section">
            <ul className="social-icons">
              {social.map(socials => {
                const { id, url, icon } = socials;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="nav-contact nav-section">
          <a className="contact" href="#">
            GET IN TOUCH
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
