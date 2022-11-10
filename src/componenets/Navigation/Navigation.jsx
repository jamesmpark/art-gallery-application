import './Navigation.css';
import { social } from '../../data.js';

const Navigation = () => {
  return (
    <>
      <nav>
        <div class="nav-section">
          <h2>James Park</h2>
        </div>
        <div class="nav-section nav-link-section">
          <a href="#">ABOUT</a>
          <a href="#">WORK</a>
        </div>
        <div class="nav-section nav-social-section">
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
        <div className="nav-contact nav-section">
          <a href="#">GET IN TOUCH</a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
