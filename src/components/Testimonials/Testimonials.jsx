import React from "react";
import user from "../../assets/images/user.png";
import right from '../../assets/images/arrow-r.jpg'
import "./Testimonials.scss";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__text">
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
          <p className="testimonials__title">Testimonials</p>
        </div>
        <div className="testimonials__blocks">
          <div className="testimonials__block">
            <div className="testimonials__text">
              <p className="testimonials__kav">‘‘</p>
              <p className="testimonials__descr">
                I came to consultation, because I was puzzled with current life
                situation and Alice gave me clear ways to develop, and a plan of
                how to move ahead to avoid further problems. Some things she
                said became a much-needed insight for me.
              </p>
            </div>
            <div className="testimonials__user">
              <img src={user} alt="" />
              <p className="testimonials__user-title">Clara Jenkins</p>
              <p className="testimonials__user-city">Paris</p>
            </div>
          </div>
          <div className="testimonials__block">
            <div className="testimonials__text">
              <p className="testimonials__kav">‘‘</p>
              <p className="testimonials__descr">
                I came to consultation, because I was puzzled with current life
                situation and Alice gave me clear ways to develop, and a plan of
                how to move ahead to avoid further problems. Some things she
                said became a much-needed insight for me.
              </p>
            </div>
            <div className="testimonials__user">
              <img src={user} alt="" />
              <p className="testimonials__user-title">Clara Jenkins</p>
              <p className="testimonials__user-city">Paris</p>
            </div>
          </div>
          <div className="testimonials__block">
            <div className="testimonials__text">
              <p className="testimonials__kav">‘‘</p>
              <p className="testimonials__descr">
                I came to consultation, because I was puzzled with current life
                situation and Alice gave me clear ways to develop, and a plan of
                how to move ahead to avoid further problems. Some things she
                said became a much-needed insight for me.
              </p>
            </div>
            <div className="testimonials__user">
              <img src={user} alt="" />
              <p className="testimonials__user-title">Clara Jenkins</p>
              <p className="testimonials__user-city">Paris</p>
            </div>
          </div>
          <div className="testimonials__block">
            <div className="testimonials__text">
              <p className="testimonials__kav">‘‘</p>
              <p className="testimonials__descr">
                I came to consultation, because I was puzzled with current life
                situation and Alice gave me clear ways to develop, and a plan of
                how to move ahead to avoid further problems. Some things she
                said became a much-needed insight for me.
              </p>
            </div>
            <div className="testimonials__user">
              <img src={user} alt="" />
              <p className="testimonials__user-title">Clara Jenkins</p>
              <p className="testimonials__user-city">Paris</p>
            </div>
          </div>
          <div className="testimonials__block">
            <div className="testimonials__text">
              <p className="testimonials__kav">‘‘</p>
              <p className="testimonials__descr">
                I came to consultation, because I was puzzled with current life
                situation and Alice gave me clear ways to develop, and a plan of
                how to move ahead to avoid further problems. Some things she
                said became a much-needed insight for me.
              </p>
            </div>
            <div className="testimonials__user">
              <img src={user} alt="" />
              <p className="testimonials__user-title">Clara Jenkins</p>
              <p className="testimonials__user-city">Paris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
