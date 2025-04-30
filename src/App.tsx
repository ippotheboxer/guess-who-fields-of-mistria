import React, { useState } from 'react'
import './App.css'
import characters from "./data.json";
import Character from './components/Character';
import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import ThemeMenu from './components/ThemeMenu';
import ChosenCharacter from './components/ChosenCharacter';

import diceImg from "./assets/images/dice.png";

const App: React.FC = () => {
  const [season, setSeason] = useState<"spring" | "summer" | "fall" | "winter">("spring");
  const [chosenCharacter, setChosenCharacter] = useState<string | null>(null);
  const [isChoosing, setIsChoosing] = useState(false);

  const [activeFilters, setActiveFilters] = useState({
    gender: "",
    romanceable: null as boolean | null,
  });

  const handleGenderFilter = (gender: string) => {
    setActiveFilters((prev) => ({
      gender: prev.gender === gender ? "" : gender,
      romanceable: null,
    }));
  };

  const handleRomanceableFilter = (val: boolean | null) => {
    setActiveFilters((prev) => ({
      gender: "",
      romanceable: prev.romanceable === val ? null : val,
    }));
  };

  const selectedCharacter = characters.find(c => c.name === chosenCharacter);

  return (
    <main className='flex flex-col items-center bg-[url(assets/images/background/spring_bg.png)] bg-cover min-h-screen min-w-full'>
      <ThemeMenu currentSeason={season} onSeasonChange={setSeason} />
      <Header />
      <FilterMenu
        onGenderFilter={handleGenderFilter}
        onRomanceableFilter={handleRomanceableFilter}
      />
      <section className='pt-4 lg:pt-8 px-10 pb-8 lg:px-12 xl:px-16'>
        <ul className='grid lg:grid-cols-8 xl:grid-cols-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row auto-rows-min gap-2 bg-[#EFDFE1]/80 p-4 border-[#C27D64] border-3 rounded-sm'>
          {characters.map(character => {
            const shouldBeFiltered =
              (activeFilters.gender !== "" && character.gender === activeFilters.gender) ||
              (activeFilters.romanceable !== null && character.romanceable === activeFilters.romanceable);

            const seasonalKey = `${season}_filename`;
            const filename =
              season !== "spring" && character[seasonalKey as keyof typeof character]
                ? character[seasonalKey as keyof typeof character]
                : character.default_filename;

            return (
              <Character
                key={character.name}
                charName={character.name}
                imgSrc={`../assets/images/characters/${character.name.toLowerCase()}/${filename}`}
                isFiltered={shouldBeFiltered}
                isChoosing={isChoosing}
                onChoose={() => {
                  if (isChoosing) {
                    setChosenCharacter(character.name);
                    setIsChoosing(false);
                  }
                }}
              />
            );
          })}
        </ul>

      </section>
      <section className='pb-8 flex flex-col items-center justify-center'>
        {selectedCharacter && <ChosenCharacter character={selectedCharacter} season={season} />}
          <div className='flex flex-col md:flex-row items-center pt-4'>
        <button
          onClick={() => setIsChoosing(true)}
          className='silkscreen-regular px-4 py-2 bg-green-300 text-white rounded-lg hover:bg-white hover:text-green-300 transition ease-in-out duration-150 hover:cursor-pointer'
        >
          {!isChoosing ? <p>Choose your Character!</p> : <p>Choosing...</p>}
        </button>
        <button
          onClick={() => {
            const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
            setChosenCharacter(randomCharacter.name);
            setIsChoosing(false);
          }}
          className='p-2 bg-green-100 rounded-lg hover:cursor-pointer hover:bg-white transition ease-in-out duration-150 mt-2 md:mt-0 md:ml-4'
        >
          <img src={diceImg} alt='pixelated dice' className='w-6 h-6'/>
        </button>
        </div>


      </section>
    </main>
  );
}

export default App;
