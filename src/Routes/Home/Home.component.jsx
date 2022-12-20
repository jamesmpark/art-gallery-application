import Navigation from '../../componenets/Navigation/Navigation.component';
import Carousel from '../../componenets/Carousel/Carousel.component';
import './Home.styles.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Carousel />
    </div>
  );
};

export default Home;
