import React from "react";

const ThemeButton: React.FC<{ imgSrc: string; alt: string }> = ({
  imgSrc,
  alt,
}) => {
  return (
    <button key={alt} className="bg-white/50 p-2 border-1 border-black ml-2">
      <img src={imgSrc} alt={alt} className="w-8 h-8" />
    </button>
  );
};

export default ThemeButton;
