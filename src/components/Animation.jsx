import Lottie from "lottie-react";
import fireworksAnimation from "../assets/firework.json";
import heartsAnimation from "../assets/heart.json";
import starsAnimation from "../assets/star.json";

const animations = {
  fireworks: fireworksAnimation,
  hearts: heartsAnimation,
  stars: starsAnimation,
};

function AnimationPlayer({ mode }) {
  return (
    <div className="mt-6">
      {mode && <Lottie animationData={animations[mode]} className="w-64 h-64" />}
    </div>
  );
}

export default AnimationPlayer;
