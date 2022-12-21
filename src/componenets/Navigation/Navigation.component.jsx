import { useState, useRef } from 'react';
import { social } from '../../data.js';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Button/Button.component';
import Modal from '../Modal/Modal.component.jsx';
import ContactForm from '../Contact-Form/ContactForm.component.jsx';
import './Navigation.styles.css';

const Navigation = () => {
  // hamburger menu state
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // modalRef accesses setIsOpen in Modal componenet
  const modalRef = useRef();

  return (
    <>
      <nav>
        <div id="nav-logo-section" className="nav-section">
          <Link to="/">
            <h1 className="logo">James Park</h1>
          </Link>
        </div>
        <div
          id="nav-mobile-section"
          className={click ? 'nav-menu nav-active' : 'nav-menu'}
        >
          <div id="nav-link-section" className="nav-section">
            <a href="about" className="link">
              ABOUT
            </a>
            <a href="archive" className="link">
              ARCHIVE
            </a>
            <a href="shop" className="link">
              SHOP
            </a>
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
              <ContactForm />
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
