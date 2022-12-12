import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { artData } from '../../data';
import Button from '../Button/Button';
import './Carousel.css';

const Carousel = () => {
  const [art, setArt] = useState(artData);
  const [index, setIndex] = useState(0);

  const handleNextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;
      if (index > art.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const handlePrevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = art.length - 1;
      }
      return index;
    });
  };

  // Navigation with left/right arrow keys
  useEffect(() => {
    const handleUserKeyPress = e => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      }
      if (e.key === 'ArrowRight') {
        handleNextSlide();
      }
    };
    // listens for keydown events and calls handleUserKeyPress function
    window.addEventListener('keydown', handleUserKeyPress);
    // clean up function
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [setArt]);

  // useRef to apply 'active' style on button when using left/right arrow keys

  // autoplay functionality: after 6s, see the next slide
  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(oldIndex => {
  //       let index = oldIndex + 1;
  //       if (index > art.length - 1) {
  //         index = 0;
  //       }
  //       return index;
  //     });
  //   }, 6000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

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
              <div className="article-nav-section article-section">
                {/* button group */}
                <div className="btn-group">
                  <Button type="prev button" onClick={handlePrevSlide}>
                    <FaArrowLeft />
                  </Button>
                  <Button type="next button" onClick={handleNextSlide}>
                    <FaArrowRight />
                  </Button>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </main>
  );
};

export default Carousel;
