import React from "react";
import { Link } from "react-router-dom";
import animationData from "../assets/animationData.json";
import Lottie from "lottie-react";
import { useAuth0 } from "@auth0/auth0-react";
const Hero = ({ isMobile }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div
      className={`h-full w-full flex items-center ${
        isMobile ? "flex-wrap-reverse" : ""
      }`}
    >
      <div className="flex flex-col">
        {isAuthenticated && (
          <div className="flex mb-10">
            <img src={user.picture} alt={user.name} className="h-[30px] object-contain rounded-full mr-2"/>
            <h1 className="font-dsans text-2xl font-extrabold">Hey, {user.name}!</h1>
          </div>
        )}
        <h2 className="font-bold text-4xl mb-4">
          Search for best talents all over the globe
        </h2>
        <p className="font-dsans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus
          fuga ad harum accusamus. Unde, voluptatum minima. Dolor delectus quas
          totam
        </p>
        <div className="flex gap-2 mt-2 font-dsans"> 
            <Link to="/signup" className="bg-accent hover:bg-secondary w-full sm:w-[80px] rounded mt-2 py-1"><button className="w-full text-center">Signup
            </button></Link>
            <Link to="/login" className="bg-accent hover:bg-secondary w-full sm:w-[80px] rounded mt-2 py-1"><button className="w-full text-center">Login
            </button></Link>
        </div>
      </div>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Hero;
