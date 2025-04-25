// src/components/Animation.jsx
import React from "react";
import Lottie from "lottie-react";

import fireworksAnimation from "../assets/firework.json";
import heartsAnimation from "../assets/heart.json";
import starsAnimation from "../assets/star.json";

// import 9 background images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

import "../style.css";

const animations = {
  fireworks: fireworksAnimation,
  hearts: heartsAnimation,
  stars: starsAnimation,
};

const images = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
};

function AnimationPlayer({ mode, imageKey }) {
  return (
    <div className="animation-wrapper">
      {/* Background image */}
      {images[imageKey] && (
        <img
          src={images[imageKey]}
          alt={`${imageKey} background`}
          className="animation-img"
        />
      )}

      {/* Lottie animation */}
      <Lottie
        animationData={animations[mode]}
        className="animation-lottie"
      />
    </div>
  );
}

export default AnimationPlayer;
