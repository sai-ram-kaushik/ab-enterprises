import React, { useState, useTransition } from "react";
import TabButton from "../utils/TabButton";
import "animate.css";

const Service = ({ service }) => {
  const [tab, setTab] = useState("Corporate Gifting");
  const [isPending, startTransition] = useTransition();
  const {
    heading,
    corporateGifting,
    corporateSupplies,
    buildingCompliance,
    consultingServices,
  } = service;

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const Tab_Data = [
    {
      title: "Corporate Gifting",
      id: "Corporate Gifting",
      content: (
        <div className="flex flex-wrap items-center justify-center lg:items-start mt-10 gap-5 animate__animated animate__fadeInUp">
          {corporateGifting.services.map((list, index) => {
            return (
              <div className="parent" key={index}>
                <div className="card">
                  <div className="logo">
                    <span className="circle circle4"></span>
                    <span className="circle circle5 text-background text-xl font-bold">
                      {index}
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content">
                    <span className="text-background text-2xl font-bold">
                      {list.label}
                    </span>
                    <span className="text font-bold">{list.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },

    {
      title: "Corporate Supplies",
      id: "Corporate Supplies",
      content: (
        <div className="flex flex-wrap items-center justify-center lg:items-start mt-10 gap-5 animate__animated animate__fadeInUp">
          {corporateSupplies.services.map((list, index) => {
            return (
              <div className="parent" key={index}>
                <div className="card">
                  <div className="logo">
                    <span className="circle circle4"></span>
                    <span className="circle circle5 text-background text-xl font-bold">
                      {index}
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content">
                    <span className="text-background text-xl font-bold">
                      {list.label}
                    </span>
                    {/* <span className="text font-bold">{list.desc}</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },

    {
      title: "Building Compliance",
      id: "Building Compliance",
      content: (
        <div className="flex flex-wrap items-center justify-center lg:items-start mt-10 gap-5 animate__animated animate__fadeInUp">
          {buildingCompliance.services.map((list, index) => {
            return (
              <div className="parent" key={index}>
                <div className="card">
                  <div className="logo">
                    <span className="circle circle4"></span>
                    <span className="circle circle5 text-background text-xl font-bold">
                      {index}
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content">
                    <span className="text-background text-xl font-bold">
                      {list.label}
                    </span>
                    {/* <span className="text font-bold">{list.desc}</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },

    {
      title: "Consulting Services",
      id: "Consulting Services",
      content: (
        <div className="flex flex-wrap items-center justify-center lg:items-start mt-10 gap-5 animate__animated animate__fadeInUp">
          {consultingServices.services.map((list, index) => {
            return (
              <div className="parent" key={index}>
                <div className="card">
                  <div className="logo">
                    <span className="circle circle4"></span>
                    <span className="circle circle5 text-background text-xl font-bold">
                      {index}
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content">
                    <span className="text-background text-lg font-bold">
                      {list.label}
                    </span>
                    {/* <span className="text font-bold">{list.desc}</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-5 md:px-10">
      <div className="flex justify-center">
        <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
          {heading}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5 text-2xl">
        <TabButton
          selectTab={() => handleTabChange("Corporate Gifting")}
          active={tab === "Corporate Gifting"}
        >
          {corporateGifting.title}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Corporate Supplies")}
          active={tab === "Corporate Supplies"}
        >
          {corporateSupplies.heading}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Building Compliance")}
          active={tab === "Building Compliance"}
        >
          {buildingCompliance.title}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Consulting Services")}
          active={tab === "Consulting Services"}
        >
          {consultingServices.title}
        </TabButton>
      </div>
      <div>{Tab_Data.find((t) => t.id === tab).content}</div>
    </div>
  );
};

export default Service;
