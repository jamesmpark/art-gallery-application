import './Navigation.css';
import { social } from '../../data.js';

const Navigation = () => {
  const handleNavToggle = () => {
    console.log('button');
  };

  return (
    <>
      <nav>
        <div id="nav-logo-section" className="nav-section">
          <h1 className="logo">JP</h1>
        </div>
        <div id="nav-mobile-section">
          <div id="nav-link-section" className="nav-section">
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
            <a href="#">ARCHIVE</a>
          </div>
          <div id="nav-social-section" className="nav-section">
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
          <div id="nav-contact-section" className="nav-section">
            <a className="contact" href="#">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <button
          id="nav-toggle-button"
          type="button"
          onClick={handleNavToggle()}
        >
          <span>Menu</span>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </>
  );
};

export default Navigation;
