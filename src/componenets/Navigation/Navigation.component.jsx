import { useState, useRef } from 'react';
import { social } from '../../data.js';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Button/Button.component';
import Modal from '../Modal/Modal.component.jsx';
import './Navigation.styles.css';

const Navigation = () => {
  // hamburger menu state
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // modalRef
  const modalRef = useRef();

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
            <Button
              className="contact btn"
              onClick={() => modalRef.current.open()}
            >
              GET IN TOUCH
            </Button>
            <Modal ref={modalRef}>
              <div className="modal-header">
                <h2>Let's talk bzns</h2>
                <FaTimes onClick={() => modalRef.current.close()} />
              </div>
              <div>
                <p>form placeholder</p>
              </div>
              {/* create form componenet for contact form */}
            </Modal>
          </div>
        </div>
        {/* hamburger menu */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#e2dfdf' }} />
          ) : (
            <FaBars size={20} style={{ color: '#000000' }} />
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;