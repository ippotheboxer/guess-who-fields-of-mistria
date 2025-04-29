import React from "react";

const ThemeButton: React.FC<{ imgSrc: string; alt: string }> = ({
  imgSrc,
  alt,
}) => {
  return (
    <button key={alt} className="bg-white/50 p-1 border-1 border-black lg:ml-2 ml-1">
      <img src={imgSrc} alt={alt} className="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

export default ThemeButton;
