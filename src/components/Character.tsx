import React from 'react';

interface Props {
    imgSrc: string;
    charName: string;
}

const Character:React.FC<Props> = ({imgSrc, charName}) => {
  return (
    <div key={charName} className='flex flex-col items-center'>
        <img src={imgSrc} alt={"Portrait of " + charName} className='h-full object-contain' />
        <p className='text-lg silkscreen-regular'>{charName}</p>
    </div>
  );
}

export default Character;