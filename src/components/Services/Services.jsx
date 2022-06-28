import React from "react";
import "./Services.scss";
import serv1 from '../../assets/images/serv1.jpg'
import serv2 from '../../assets/images/serv2.jpg'
import serv3 from '../../assets/images/serv3.jpg'
const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__title">
          <p className="services__title-text">
            Divining the Past, Present and Future
          </p>
          <p className="services__title_descr">
            Welcome to Mystik the home of Tarot readers who divine for clarity
            on their love lives, more money in their businesses and predictions
            for the future. Tell me, where are you on your Tarot journey?
          </p>
        </div>
        <div className="services__bloks">
          <div className="services__blok">
            <div className="services__bloks-img">
              <img
                src={serv1}
                alt="serv1"
              />
            </div>
            <div className="services__bloks-text">
              <p className="services__bloks-title">Fortune Telling</p>
              <ul className="services__bloks-ul">
                <li>Love</li>
                <li>money</li>
                <li>family</li>
              </ul>
              <button className="services__bloks-button">WhatsApp</button>
            </div>
          </div>
          <div className="services__blok">
            <div className="services__bloks-img">
              <img
                src={serv2}
                alt="serv2"
              />
            </div>
            <div className="services__bloks-text">
              <p className="services__bloks-title">Career Predictions</p>
              <ul className="services__bloks-ul">
                <li>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum.
                </li>
              </ul>
              <button className="services__bloks-button">WhatsApp</button>
            </div>
          </div>
          <div className="services__blok">
            <div className="services__bloks-img">
              <img
                src={serv3}
                alt="serv3"
              />
            </div>
            <div className="services__bloks-text">
              <p className="services__bloks-title">Love Predictions</p>
              <ul className="services__bloks-ul">
                <li>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum.
                </li>
              </ul>
              <button className="services__bloks-button">WhatsApp</button>
            </div>
          </div>
          <div className="services__blok">
            <div className="services__bloks-img">
              <img
                className="services__bloks-img"
                src={serv3}
                alt="serv3"
              />
            </div>
            <div className="services__bloks-text">
              <p className="services__bloks-title">Love Predictions</p>
              <ul className="services__bloks-ul">
                <li>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum.
                </li>
              </ul>
              <button className="services__bloks-button">WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
