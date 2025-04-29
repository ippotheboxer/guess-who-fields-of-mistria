import React from "react";
import Filter from "./Filter";

// Images
import femaleSymbol from "../assets/images/female-symbol.png";
import maleSymbol from "../assets/images/male-symbol.png";
import marriageSymbol from "../assets/images/heart-pixel.png";

const FilterMenu: React.FC = () => {
  return (
    <div className="flex flex-row justify-around">
      <Filter alt="femaleSymbol" imgSrc={femaleSymbol} />
      <Filter alt="maleSymbol" imgSrc={maleSymbol} />
      <Filter alt="marriageSymbol" imgSrc={marriageSymbol} />
    </div>
  );
};

export default FilterMenu;
