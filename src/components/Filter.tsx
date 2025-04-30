import React from "react";

interface FilterProps {
  imgSrc: string;
  alt: string;
  onClick: () => void;
}

const Filter: React.FC<FilterProps> = ({ imgSrc, alt, onClick }) => {
  return (
    <button key={alt} onClick={onClick} className="bg-[#EFDFE1] p-1 hover:cursor-pointer lg:mr-4 mr-2 border-2 border-[#C27D64]">
      <img src={imgSrc} alt={alt} className="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5 object-contain"/>
    </button>
  );
};

export default Filter;
