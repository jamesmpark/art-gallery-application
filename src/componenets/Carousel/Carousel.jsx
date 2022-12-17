import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { artData } from '../../data';
import Button from '../Button/Button';
import './Carousel.css';

const Carousel = () => {
  const [art, setArt] = useState(artData);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('');

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

  // Navigation with left/right arrow keys (manual dom changes)
  useEffect(() => {
    const handleUserKeyPress = e => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
        setActiveTab('prev');
      }
      if (e.key === 'ArrowRight') {
        handleNextSlide();
        setActiveTab('next');
      }
    };
    // setActiveTab will be '' after .3ms
    const timer = setTimeout(() => {
      setActiveTab('');
    }, 300);
    // listens for keydown events and calls handleUserKeyPress function
    window.addEventListener('keydown', handleUserKeyPress);
    // clean up function
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
      clearTimeout(timer);
    };
  }, [index]);

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
          <article className={position} key={id}>
            <div className="article-image-section article-section">
              <img src={image} alt={title} className="art-img" />
            </div>
            <div className="article-description-section article-section">
              <p>{description}</p>
            </div>
            <div className="article-title-section article-section">
              <h1>{title}</h1>
            </div>
            <div className="article-nav-section article-section">
              {/* button group */}
              <div className="btn-group">
                <Button
                  className={activeTab === 'prev' ? 'btn active' : 'btn'}
                  type="navButton"
                  onClick={handlePrevSlide}
                >
                  <FaArrowLeft />
                </Button>
                <Button
                  className={activeTab === 'next' ? 'btn active' : 'btn'}
                  type="navButton"
                  onClick={handleNextSlide}
                >
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Carousel;
