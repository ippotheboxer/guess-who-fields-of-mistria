import React from "react";

const Filter: React.FC<{ imgSrc: string; alt: string }> = ({ imgSrc, alt }) => {
  return (
    <button key={alt} className="bg-white/50 p-2 hover:cursor-pointer border-1 border-black">
      <img src={imgSrc} alt={alt} className="w-8 h-8 object-contain"/>
    </button>
  );
};

export default Filter;
