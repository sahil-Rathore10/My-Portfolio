import React from "react";
import bgImage from "../assets/bg.png";

const Hero = () => {
  return (
    <div className="p-4 px-6 w-full relative mx-auto  flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-10 h-[350px] w-[250px] top-115 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={bgImage}
          alt="bg-image"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl mt-25 mb-0 leading-none">
        👋, my name is Sahil and I am a freelancer
      </h2>

      <h1 className="mb-0 leading-[.8] text-center px-2 text-[10vw] font-bold tracking-tighter font-['Placard next cond bold']">
        {" "}
        Web Developer <br />{" "}
        <span
          className="text-9xl tracking-tighter text-transparent font-['Placard next cond bold'] font-bold leading-none"
          style={{ WebkitTextStroke: "2px black" }}
        >
          & Building Modern Web Experiences
        </span>
      </h1>

      {/* <h1 className="mb-1 px-2 text-[10vw] font-bold tracking-tighter font-['Placard next cond bold'] leading-tight">
    Web Developer
  </h1>
  
  <h1
    className="text-9xl tracking-tighter text-transparent font-['Placard next cond bold'] font-bold text-center leading-tight"
    style={{ WebkitTextStroke: '2px black' }}
  >
    & Building Modern Web Experiences
  </h1> */}
    </div>
  );
};

export default Hero;
