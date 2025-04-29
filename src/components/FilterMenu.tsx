import React from "react";
import Filter from "./Filter";

// Images
import femaleSymbol from "../assets/images/female-symbol.png";
import maleSymbol from "../assets/images/male-symbol.png";
import marriageSymbol from "../assets/images/heart-pixel.png";

interface FilterMenuProps {
  onGenderFilter: (gender: string) => void;
  onRomanceableFilter: (val: boolean | null) => void;
}


const FilterMenu: React.FC<FilterMenuProps> = ({ onGenderFilter, onRomanceableFilter }) => {
  return (
    <div className="flex flex-row justify-around">
      <Filter alt="femaleSymbol" imgSrc={femaleSymbol} onClick={() => onGenderFilter('F')} />
      <Filter alt="maleSymbol" imgSrc={maleSymbol} onClick={() => onGenderFilter('M')} />
      <Filter alt="marriageSymbol" imgSrc={marriageSymbol} onClick={() => onRomanceableFilter(true)} />
    </div>
  );
};

export default FilterMenu;
