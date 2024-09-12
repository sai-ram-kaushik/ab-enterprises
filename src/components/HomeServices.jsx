import React from "react";
import "animate.css";

const HomeServices = ({ homeService }) => {
  const { heading, services } = homeService;
  return (
    <div className="w-full px-5 md:px-10 animate__animated animate__fadeInUp">
      <div className="flex justify-start">
        <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-5 w-full gap-5">
        {services.map((service, index) => {
          return (
            <div className="parent" key={index}>
              <div className="card">
                <div className="logo">
                  <span className="circle circle4"></span>
                  <span className="circle circle5 text-background text-xl font-bold">
                    {service.count}
                  </span>
                </div>
                <div className="glass"></div>
                <div className="content">
                  <span className="text-background text-xl font-bold">
                    {service.label}
                  </span>
                  <span className="text">{service.desc}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeServices;
