import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { artData } from '../../data';

const Carousel = () => {
  const [art, setArt] = useState(artData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = art.length - 1;
    // if art index is negative, setArt to the last index of the array
    if (index < 0) {
      setIndex(lastIndex);
    }
    // if index is greater than the lastIndex, setIndex to beginning
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, art]);

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
