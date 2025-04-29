import React from "react";
import logoImg from "../assets/images/Fields-of-Mistria-logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center pt-4">
        <img src={logoImg} alt="Fields of Mistria Logo" className="h-36" />
        <h1 className="text-2xl text-white silkscreen-regular">- Guess Who</h1>
    </header>
  );
};

export default Header;
