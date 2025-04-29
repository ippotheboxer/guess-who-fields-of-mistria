import React from "react";
import logoImg from "../assets/images/Fields-of-Mistria-logo.png";
import FilterMenu from "./FilterMenu";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col pt-4">
      <div className="flex flex-row items-center pb-4">
        <img src={logoImg} alt="Fields of Mistria Logo" className="h-36" />
        <h1 className="text-2xl text-white silkscreen-regular">- Guess Who</h1>
      </div>
      <FilterMenu />
    </header>
  );
};

export default Header;
