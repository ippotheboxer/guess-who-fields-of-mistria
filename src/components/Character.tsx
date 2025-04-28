import React from 'react';

interface Props {
    imgSrc: string;
    charName: string;
}

const Character:React.FC<Props> = ({imgSrc, charName}) => {
  return (
    <div key={charName} className='flex flex-col items-center p-4 bg-white/50'>
        <img src={imgSrc} alt={"Portrait of " + charName} className='w-full h-full object-contain' />
        <p className='text-lg'>{charName}</p>
    </div>
  );
}

export default Character;