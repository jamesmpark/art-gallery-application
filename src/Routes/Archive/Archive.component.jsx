import Navigation from '../../componenets/Navigation/Navigation.component';
import './Archive.styles.scss';

const Archive = () => {
  return (
    <>
      <Navigation />
      <h2 className="archive-header">Archive</h2>
      <div className="image-grid">
        <div className="image one vertical"></div>
        <div className="image two"></div>
        <div className="image three"></div>
        <div className="image four"></div>
        <div className="image five vertical"></div>
        <div className="image six horizontal"></div>
        <div className="image seven"></div>
        <div className="image eight"></div>
        <div className="image nine"></div>
        <div className="image ten"></div>
        <div className="image eleven horizontal"></div>
        <div className="image twelve"></div>
        <div className="image thirteen"></div>
        <div className="image fourteen"></div>
      </div>
    </>
  );
};

export default Archive;
