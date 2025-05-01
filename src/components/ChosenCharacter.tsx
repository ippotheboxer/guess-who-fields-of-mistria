import React from "react";

interface CharacterData {
  name: string;
  default_filename: string;
  [key: string]: any;
}

interface Props {
  character: CharacterData;
  season: "spring" | "summer" | "fall" | "winter" | "beach";
}

const ChosenCharacter: React.FC<Props> = ({ character, season }) => {
  const filename = character[`${season}_filename`] || character.default_filename;
  const imgSrc = `assets/images/characters/${character.name.toLowerCase()}/${filename}`;

  return (
    <div className="silkscreen-regular flex flex-col items-center mt-4 p-4 bg-white/90 rounded-md shadow-md ring-2 ring-[#C27D64]">
      <p className="text-xl font-bold mb-2">Your chosen character:</p>
      <img
        src={imgSrc}
        alt={`Portrait of ${character.name}`}
        className="object-contain h-40"
      />
      <p className="text-lg mt-2">{character.name}</p>
    </div>
  );
};

export default ChosenCharacter;
