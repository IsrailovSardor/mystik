import React from "react";
import { useTranslation } from "react-i18next";
import video from '../../assets/images/203-7201qq.mp4'
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <video
        className="home__video"
        src={video}
        autoPlay
        muted
        loop
      />

      <div className="home__container">
      <div className="home__title">
        <svg
          className="home__svg"
          width="302"
          height="25"
          viewBox="0 0 302 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M302 12.5C295.107 12.5 289.5 18.1072 289.5 25C289.5 18.1072 283.893 12.5 277 12.5C283.893 12.5 289.5 6.89279 289.5 0C289.5 6.89279 295.08 12.5 302 12.5Z"
            fill="#BF9D50"
          ></path>
          <path
            d="M25 12.5C18.1072 12.5 12.5 18.1072 12.5 25C12.5 18.1072 6.89277 12.5 0 12.5C6.89277 12.5 12.5 6.89279 12.5 0C12.5 6.89279 18.0799 12.5 25 12.5Z"
            fill="#BF9D50"
          ></path>
          <path d="M21 12H281V13H21V12Z" fill="#BF9D50"></path>
        </svg>
        <h1 className="first-block__name">{t("name")}</h1>
        <div className="home-title__second-block">
          <p className="second-block__descr">{t("exotic.0")}</p>
          <p className="second-block__descr">{t("exotic.1")}</p>
          <p className="second-block__descr">{t("exotic.2")}</p>
          <p className="second-block__descr">{t("exotic.3")}</p>
        </div>
          <button className="third-block__whatsapp">WhatsApp</button>
        <svg
          className="home__svg"
          width="302"
          height="25"
          viewBox="0 0 302 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M302 12.5C295.107 12.5 289.5 18.1072 289.5 25C289.5 18.1072 283.893 12.5 277 12.5C283.893 12.5 289.5 6.89279 289.5 0C289.5 6.89279 295.08 12.5 302 12.5Z"
            fill="#BF9D50"
          ></path>
          <path
            d="M25 12.5C18.1072 12.5 12.5 18.1072 12.5 25C12.5 18.1072 6.89277 12.5 0 12.5C6.89277 12.5 12.5 6.89279 12.5 0C12.5 6.89279 18.0799 12.5 25 12.5Z"
            fill="#BF9D50"
          ></path>
          <path d="M21 12H281V13H21V12Z" fill="#BF9D50"></path>
        </svg>
      </div>
      </div>
    </div>
  );
};

export default Home;


// СЕМЬЯ
// ЛЮБОВЬ
// Здоровье
// Защита
// Предсказания
// Удача