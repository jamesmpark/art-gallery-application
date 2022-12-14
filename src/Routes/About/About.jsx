import Navigation from '../../componenets/Navigation/Navigation';
import './About.styles.css';

const About = () => {
  return (
    <>
      <Navigation />
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Hello There</h1>
          <h2>Welcome to my art-portfolio and print shop!</h2>
          <p>
            I built this project to showcase my passion for art and as a
            learning tool to help me understand various React/Javascript
            principles. It serves to store my art in a space where I feel I can
            show others what I've learned in programming journey.
          </p>
          <p>
            This project was created primarily with various React libraries.
            Database storage was used with Firebase/Firestore and payments are
            handled with Stripe. The code for this project can be found here.
          </p>
          <p>
            The artwork that is displayed here was created anywhere from 2016 to
            the current day. I enjoy working across various mediums, both
            physical and digital.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
