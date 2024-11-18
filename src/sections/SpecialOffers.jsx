import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap items-center
    max-xl:flex-col-reverse max-container gap-10"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offers"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddig-x pt-28">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg ">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text text-slate-gray ">
          Embark on shopping that redefines your experience 
          with unbeatable deals From premier selection incredible savings,
          We offer unparalled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a real of possibilities designed to fullfill your unique desires, surpassing the loftiest 
          expectation. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button Label="Shop Now" iconURL={arrowRight}/>
          
          <Button Label="Leanr More" 
          backgroundColor ="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
