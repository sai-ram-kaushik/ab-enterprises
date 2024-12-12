import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const policies = [
    { name: "Privacy", path: "/privacy-policy" },
    { name: "Refund", path: "/privacy-policy", path: "/refund-policy" },
    { name: "Pricing", path: "/pricing-policy" },
    { name: "Shipping", path: "/shipping-policy" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
  ];

  return (
    <>
      <div className={`w-full mt-10 p-3 px-5 lg:px-10 `}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5 lg:gap-16">
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-2xl md:text-4xl font-bold">
                A.B. <span>Enterprises</span>
              </h3>
            </div>

            <div className="flex flex-col items-start gap-5">
              <p className="font-bold text-primary">About Us</p>
              <div className="flex flex-col items-start gap-2">
                <Link to="/">
                  <p className="hover:text-primary cursor-pointer">Home</p>
                </Link>
                <Link to="/about">
                  <p className="hover:text-primary cursor-pointer">About Us</p>
                </Link>
                <Link to="/services">
                  <p className="hover:text-primary cursor-pointer">Services</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5">
              <p className="font-bold text-primary">Contact Us</p>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <IoMdMail size={15} className="text-secondary" />
                  <a href="mailto:support@abenterprises.com">
                    <p>support@abent.co</p>
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <FaPhoneAlt size={15} className="text-secondary" />
                  <div className="flex flex-col items-start">
                    <p>+91 8527888015</p>
                    <p>+91 8750128015</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FaLocationDot size={20} className="text-secondary" />
                  <p>
                    DLF Corporate Greens, Sec 74(A), Gurgaon, Haryana, 122001
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5">
              <p className="font-bold text-primary">Policy</p>
              <div className="flex flex-col items-start gap-2">
                {policies.map((policy, idx) => (
                  <ul key={idx} className="text-[16px]">
                    <Link to={policy.path}>
                      <li>{policy.name}</li>
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <hr className="mt-5" />

          <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3">
            <p>2024 - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
