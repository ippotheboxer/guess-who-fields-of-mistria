import React from "react";
import logoImg from "../assets/images/Fields-of-Mistria-logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center lg:-mt-12 pb-1">
        <img src={logoImg} alt="Fields of Mistria Logo" className="md:h-28 sm:h-20 h-16" />
        <h1 className="md:text-2xl text-lg text-white silkscreen-regular">- Guess Who</h1>
    </header>
  );
};

export default Header;
