import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { artData } from '../../data';
import './Carousel.css';

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

  return (
    <main>
      {art.map((artItem, artIndex) => {
        let position = 'nextSlide';
        if (artIndex === index) {
          position = 'activeSlide';
        }
        if (
          artIndex === index - 1 ||
          (index === 0 && artIndex === art.length - 1)
        ) {
          position = 'lastSlide';
        }

        const { id, image, title, description } = artItem;
        return (
          <>
            <article className={position} key={id}>
              <div className="article-image-section article-section">
                <img src={image} alt={title} className="art-img" />
              </div>
              <div className="article-description-section article-section">
                <h2>{description}</h2>
              </div>
              <div className="article-title-section article-section">
                <h1>{title}</h1>
              </div>
              {/* button group */}
              <div className="article-nav-section article-section">
                <button
                  className="article-nav-button"
                  type="prev button"
                  onClick={() => setIndex(index - 1)}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="article-nav-button"
                  type="next button"
                  onClick={() => setIndex(index + 1)}
                >
                  <FaArrowRight />
                </button>
              </div>
            </article>
          </>
        );
      })}
    </main>
  );
};

export default Carousel;
