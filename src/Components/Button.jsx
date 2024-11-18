import React from "react";

const Button = ({
  Label,
  iconURL,
  backroundColor,
  textColor,
  borderColor,
  fullwidth,
}) => {
  return (
    <button
      className={`flex justify-center gap-2 px-2 py-4 border font-montserrat text-lg leading-none

    ${
      backroundColor
        ? `${backroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullwidth ? "w-full": ""}`}
    >
      {Label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
