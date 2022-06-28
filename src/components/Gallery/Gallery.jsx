import React from "react";
import "./Gallery.scss";
import img from "../../assets/images/das.jpg";
import gal1 from "../../assets/images/gal1.jpeg";
import gal2 from "../../assets/images/gal2.jpg";
import gal3 from "../../assets/images/gal3.jpg";
import gal4 from "../../assets/images/gal4.jpg";
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__text">
          <p className="gallery__title">Our Gallery</p>
          <p className="gallery__descr">
            Take a look at the best moments from the work of our astrologers and
            fortune tellers to get a better understanding of what to expect from
            your first consultation.
          </p>
        </div>
        <div className="gallery__img">
          <div className="gallery__col-one">
            <img className="g1" src={gal1} alt="" />
            <img className="g2" src={gal2} alt="" />
          </div>
          <div  className="gallery__col-two">
            <div className="g__block">
            <img className="g3" src={gal3} alt="" />
            <img className="g4"  src={gal4} alt="" />
            </div>
            <img className="g5" src={img} alt="asdasdasdasda" />
          </div>

          {/* <div>
            <img src={img} alt="asdasdasdasda" />
          </div>
          <div>
            <img src={gal1} alt="" />
          </div>
          <div>
            <img src={gal2} alt="" />
          </div>
          <div>
            <img src={gal3} alt="" />
          </div>
          <div>
            <img src={gal4} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
