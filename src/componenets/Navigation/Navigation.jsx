import Button from '../Button/Button';
import { social } from '../../data.js';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const handleNavToggle = () => {
    console.log('this is going to be nav toggle');
  };

  return (
    <>
      <nav>
        <div id="nav-logo-section" className="nav-section">
          <Link to="/">
            <h1 className="logo">James Park</h1>
          </Link>
        </div>
        <div id="nav-mobile-section">
          <div id="nav-link-section" className="nav-section">
            <a href="about">ABOUT</a>
            <a href="archive">ARCHIVE</a>
            <a href="shop">SHOP</a>
          </div>
          <div id="nav-social-section" className="nav-section">
            <ul className="social-icons">
              {social.map(socials => {
                const { id, url, icon } = socials;
                return (
                  <li key={id}>
                    <a className="fa-lg" href={url}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div id="nav-contact-section" className="nav-section">
            <Button className="contact btn">GET IN TOUCH</Button>
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
      <Outlet />
    </>
  );
};

export default Navigation;
