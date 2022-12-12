import Navigation from '../../componenets/Navigation/Navigation';
import './About.styles.css';

const About = () => {
  return (
    <>
      <Navigation />
      <div className="about-container">
        <div className="about-content">
          <h1>Hello There</h1>
          <h2>Welcome to my art-portfolio and print shop!</h2>
          <p>
            This project was created for the purpose of showcasing not only my
            passion for creating things but also as a learning tool to help me
            understand various React principles. I've always had a passion
            building and creating things on my own.
          </p>
          <br />
          <p>
            The art work that is displayed here were created anywhere from 2016
            to now.
          </p>
          <br />
          <p>
            This project was created primarily with various React
            libraries.Database storage was used with Firebase/Firestore and
            payments are handled with Stripe. The code for this project can be
            found here.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
