import React, { useState } from 'react'
import './App.css'
import characters from "./data.json";
import Character from './components/Character';
import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import ThemeMenu from './components/ThemeMenu';

const App: React.FC = () => {
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

  return (
    <main className='flex flex-col items-center bg-[url(assets/images/background/spring_bg.png)] bg-cover min-h-screen min-w-full'>
      <ThemeMenu />
      <Header />
      <FilterMenu 
        onGenderFilter={handleGenderFilter}
        onRomanceableFilter={handleRomanceableFilter}
      />
      <section className='pt-4 lg:pt-8 px-8 pb-8'>
      <ul className='grid xl:w-[1200px] lg:grid-cols-8 xl:grid-cols-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row auto-rows-min gap-2 bg-white/80 p-4'>
      {characters.map(character => {
          const shouldBeFiltered =
          (activeFilters.gender !== "" && character.gender === activeFilters.gender) ||
          (activeFilters.romanceable !== null && character.romanceable === activeFilters.romanceable);

          return (
            <Character 
              key={character.name}
              charName={character.name}
              imgSrc={`../assets/images/characters/${character.name.toLowerCase()}/${character.default_filename}`}
              isFiltered={shouldBeFiltered}
            />
          );
        })}
      </ul>
      </section>
      
    </main>
  );
}

export default App;
