import React from "react";
import { Link } from "react-router-dom";
import animationData from "../assets/animationData.json";
import Lottie from "lottie-react";

const Hero = ({ isMobile }) => {
  return (
    <div
      className={`h-full w-full flex mt-10 items-center ${
        isMobile ? "flex-wrap-reverse" : ""
      }`}
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl mb-4">
          Search for best talents all over the globe
        </h2>
        <p className="font-dsans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus
          fuga ad harum accusamus. Unde, voluptatum minima. Dolor delectus quas
          totam
        </p>
        <div className="flex gap-2 mt-2 font-dsans">
          <button className="bg-accent hover:bg-secondary w-full sm:w-[80px] rounded mt-2 py-1">
            <Link to="/signup">Signup</Link>
          </button>
          <button className="bg-accent hover:bg-secondary w-full sm:w-[80px] rounded mt-2 py-1">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Hero;
