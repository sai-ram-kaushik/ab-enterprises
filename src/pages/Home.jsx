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
            <h2 className="text-[30px] md:text-[80px] font-heading font-bold">
              Welcome to <span>A.B. Enterprises</span>
            </h2>
            <p className="max-w-[1000px] text-start md:text-center animate__animated animate__fadeInUp font-semibold text-[20px]">
              We bring integrity, innovation, and extensive experience to
              deliver tailored solutions that drive success. Our corporate
              services streamline operations, simplify regulations, and provide
              insights to guide businesses toward their goals. Committed to
              long-term partnerships, we offer reliable support to help your
              business thrive in a competitive landscape.
            </p>
          </div>
        </div>
      </div>

      <HomeServices homeService={data.homeService} />
      <Testimonials testimonials={data.testimonials} />
    </>
  );
};

export default Home;
