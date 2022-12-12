import { Outlet } from 'react-router-dom';
import Navigation from '../componenets/Navigation/Navigation';
import Carousel from '../componenets/Carousel/Carousel';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Carousel />
    </div>
  );
};

export default Home;
