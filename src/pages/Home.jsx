import React from "react";
import "animate.css";
import gift from "/gift.svg";
import HomeServices from "../components/HomeServices";
import data from "../data/landing-page.json";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 py-5 md:py-10">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center gap-2">
            <h2 className="animate__animated animate__fadeInUp md:text-center text-[40px] md:text-[95px] font-bold leading-[3rem] md:leading-[6.5rem]">
              Corporate <span>Gifting</span> <br /> with a Personal Touch
            </h2>
            <p className="max-w-[900px] text-start md:text-center animate__animated animate__fadeInUp">
              Welcome to A. B. Enterprises, your go-to for top-notch Corporate
              Gifting, Supplies, Compliance, and Consulting services. We're
              committed to enhancing your business and ensuring success through
              tailored solutions.
            </p>
          </div>
        </div>
      </div>

      <HomeServices homeService={data.homeService} />
      <Testimonials testimonials={data.testimonials}/>
    </>
  );
};

export default Home;
