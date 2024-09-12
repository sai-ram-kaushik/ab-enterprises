import React from "react";
import "animate.css";

const About = ({ about }) => {
  const {
    heading,
    aboutCompany,
    imageUrl,
    founderHeading,
    founderImageUrl,
    founder,
    designation,
  } = about;
  return (
    <div className="w-full px-5 md:px-10 animate__animated animate__fadeInUp">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
          {heading}
        </h2>

        <p className="max-w-[900px] text-center ">{aboutCompany}</p>

        <img src={imageUrl} width={600} height={100} className="" />
      </div>

      <div className="flex items-center justify-center mt-5">
        <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
          {founderHeading}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src={founderImageUrl}
          width={300}
          height={300}
          className="rounded-full"
        />

        <p className="text-3xl text-secondary">{founder}</p>
        <p className="max-w-[900px] text-center">{designation}</p>
      </div>
    </div>
  );
};

export default About;
