import React, { useEffect, useState } from "react";

interface Props {
  imgSrc: string;
  charName: string;
  isFiltered: boolean;
  isChoosing: boolean;
  onChoose: () => void;
  resetSignal: number;
}

const Character: React.FC<Props> = ({ imgSrc, charName, isFiltered, isChoosing, onChoose, resetSignal }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isChoosing) {
      onChoose();
    } else {
      setIsClicked((prev) => !prev);
    }
  }

  useEffect(() => {
    setIsClicked(false);
  }, [resetSignal]);

  return (
    <button
      onClick={handleClick}
      key={charName}
      className={`charCard ${!isClicked ? "hover:bg-green-300/60 hover:cursor-pointer" : "opacity-20"
        } ${isFiltered ? "bg-red-300/60" : ""}  ${isClicked && isFiltered ? "bg-white/50" : ""
        }`}
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
