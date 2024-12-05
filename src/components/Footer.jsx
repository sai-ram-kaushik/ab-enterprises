import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PrivacyPolicy from "./footerComponents/PrivacyPolicy";
import ReturnPolicy from "./footerComponents/ReturnPolicy";
import ShippingPolicy from "./footerComponents/ShippingPolicy";
const Footer = () => {
  const policies = [
    { name: "Privacy" },
    { name: "Refund" },
    { name: "Shipping" },
    { name: "Terms and Conditions" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const togglePopup = (content = "") => {
    setPopupContent(content);
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div
        className={`w-full mt-10 p-3 px-5 lg:px-10 ${
          isPopupOpen ? "blur-sm" : ""
        }`}
      >
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
                    <li>
                      {["Privacy", "Shipping", "Refund"].includes(
                        policy.name
                      ) ? (
                        <button
                          onClick={() => togglePopup(policy.name)}
                          className="underline hover:text-gray-700"
                        >
                          {policy.name}
                        </button>
                      ) : (
                        <a
                          href="https://drive.google.com/file/d/1b7gjGEOEBpgg-YwlgV3wY3bBE-0Z7zqG/view?usp=drive_link"
                          target="_blank"
                          className="underline hover:text-gray-700"
                        >
                          {policy.name}
                        </a>
                      )}
                    </li>
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

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative max-w-5xl w-full mx-auto"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-700"
              onClick={() => togglePopup()}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4 text-secondary">
              {popupContent}
            </h2>
            <div>
              {popupContent === "Privacy" && <PrivacyPolicy />}

              {popupContent === "Refund" && <ReturnPolicy />}

              {popupContent === "Shipping" && <ShippingPolicy />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
