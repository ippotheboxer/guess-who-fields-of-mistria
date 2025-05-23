import React from "react";

interface ThemeButtonProps {
  imgSrc: string;
  alt: string;
  onClick: () => void;
  bgElement: string;
  currentSeason: string;
  season: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  imgSrc,
  alt,
  onClick,
  bgElement,
  currentSeason,
  season
}) => {
  return (
    <button key={alt} onClick={onClick} style={{backgroundColor: bgElement}} className={`p-1 border-2 border-[#C27D64] lg:ml-2 ml-1 hover:cursor-pointer transition ease-in-out duration-200 ${currentSeason === season ? 'opacity-100' : 'opacity-40'}`}>
      <img src={imgSrc} alt={alt} className="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

export default ThemeButton;
