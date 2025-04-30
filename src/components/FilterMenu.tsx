import React from "react";
import Filter from "./Filter";

// Images
import femaleSymbol from "../assets/images/female-symbol.png";
import maleSymbol from "../assets/images/male-symbol.png";
import marriageSymbol from "../assets/images/heart-pixel.png";
import resetSymbol from "../assets/images/reset-7-64.png";

interface FilterMenuProps {
  onGenderFilter: (gender: string) => void;
  onRomanceableFilter: (val: boolean | null) => void;
  onReset: () => void;
}


const FilterMenu: React.FC<FilterMenuProps> = ({ onGenderFilter, onRomanceableFilter, onReset }) => {
  return (
    <div className="flex flex-row justify-around">
      <Filter alt="femaleSymbol" imgSrc={femaleSymbol} onClick={() => onGenderFilter('F')} />
      <Filter alt="maleSymbol" imgSrc={maleSymbol} onClick={() => onGenderFilter('M')} />
      <Filter alt="marriageSymbol" imgSrc={marriageSymbol} onClick={() => onRomanceableFilter(true)} />
      <Filter alt="resetSymbol" imgSrc={resetSymbol} onClick={onReset} />
    </div>
  );
};

export default FilterMenu;
