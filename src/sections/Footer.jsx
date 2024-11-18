import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";
const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex justify-center 
     items-start gap-20 flex-wrap max-lg:flex-col "
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p
            className="mt-6 leading-7 text-base font-montserrat text-white
          sm:max-w-sm"
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 justify-between lg:gap-10 gap-20
        flex-wrap"
        >
          {footerLinks.map((section) => (
            <div key={section}>
              <h4
                className="text-white font-montserrat 
                text-2xl leading-normal font-medium mb-6"
              >
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-white-400 text-base
                    leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between text-white-400 mt024 max-sm:flex-col
      max-sm:items-center"
      >
        <div
          className="flex flex-1 justify-start items-center gap-2
        font-montserrat cursor-pointer"
        >
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
