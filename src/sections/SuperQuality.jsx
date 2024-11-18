import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddig-x pt-28">
          <h2
            className="font-palanquin text-4xl font-bold lg:max-w-lg ">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red"> Quality </span>
            Shoes
          </h2>
          <p className=" mt-4 lg:max-w-lg info-text text-slate-gray ">
            Ensuring premium comfort and style our meticulously crafted footwear
            is designed to elevate your experience , providing you with
            unmatched qualty , innovation and touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensure your satisfication
          </p>
          <div className="mt-11">
            <Button Label="View details" />
          </div>
        </div>
       
      <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="Shoe8" width={570} height={522} 
          className="object-container" />
        </div>
    </section>
  );
};

export default SuperQuality;
