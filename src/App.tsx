import React from 'react'
import './App.css'
import characters from "./data.json";
import Character from './components/Character';

const App: React.FC = () => {
  return (
    <main className='flex flex-col items-center bg-[url(assets/images/background/spring_bg.png)] bg-cover min-h-screen min-w-full'>
      <h1 className='pt-8 text-2xl'>Fields of Mistria - Guess Who</h1>
      <section className='p-8'>
      <ul className='grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
        {characters.map(character => 
        <Character 
          charName={character.name} 
          imgSrc={`../assets/images/characters/${character.name.toLowerCase()}/${character.default_filename}`} 
          />
          )}
      </ul>
      </section>
      
    </main>
  );
}

export default App;
