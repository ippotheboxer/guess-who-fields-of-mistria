import React, { useState } from "react";

interface Props {
  imgSrc: string;
  charName: string;
}

const Character: React.FC<Props> = ({ imgSrc, charName }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={() => setIsClicked((prevState) => !prevState)}
      key={charName}
      className={`charCard ${!isClicked ? 'hover:bg-green-300/60 hover:cursor-pointer' : 'opacity-20'}`}
    >
      <img
        src={imgSrc}
        alt={"Portrait of " + charName}
        className="object-contain h-40"
      />
      <p className="text-lg silkscreen-regular">{charName}</p>
    </button>
  );
};

export default Character;
