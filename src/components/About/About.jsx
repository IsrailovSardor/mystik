import React  from "react";
import { useTranslation } from "react-i18next";
import about1 from '../../assets/images/about1.webp'
import about2 from '../../assets/images/about2.jpg'
import "./About.scss";
const About = () => {
  const {t} = useTranslation()
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__img">
          <img
            className="about__img-one"
            src={about1}
            alt="about1"
          />
          <img
            className="about__img-two"
            src={about2}
            alt="about2"
          />
        </div>
        <div className="about__text">
          <svg
            className="about__svg"
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
          <p className="about__text-title">{t("about")}</p>
          <p className="about__text-descr">
            {t("about_text")}
          </p>
          <svg
            className="about__svg"
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

export default About;
