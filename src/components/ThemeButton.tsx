import React from "react";

interface ThemeButtonProps {
  imgSrc: string;
  alt: string;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  imgSrc,
  alt,
  onClick
}) => {
  return (
    <button key={alt} onClick={onClick} className="bg-white/50 p-1 border-1 border-black lg:ml-2 ml-1">
      <img src={imgSrc} alt={alt} className="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

export default ThemeButton;
