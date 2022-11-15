import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const handleLeftClick = () => {
    console.log('left button clicked');
  };

  const handleRighClick = () => {
    console.log('right button clicked');
  };

  return (
    <main>
      <article>
        <div className="article-image-section article-section">
          <h2>image section</h2>
        </div>
        <div className="article-description-section article-section">
          <h2>desc</h2>
        </div>
        <div className="article-title-section article-section">
          <h2>title</h2>
        </div>
        <div className="article-nav-section article-section">
          <button
            className="article-nav-button"
            type="button"
            onClick={handleLeftClick}
          >
            <FaArrowLeft />
          </button>
          <button
            className="article-nav-button"
            type="button"
            onClick={handleRighClick}
          >
            <FaArrowRight />
          </button>
        </div>
      </article>
    </main>
  );
};

export default Carousel;
