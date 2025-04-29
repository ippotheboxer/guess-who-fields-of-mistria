import React from 'react';
import ThemeButton from './ThemeButton';
// Images
import springIcon from "../assets/images/spring_icon.png";
import summerIcon from "../assets/images/summer_icon.png";
import fallIcon from "../assets/images/fall_icon.png";
import winterIcon from "../assets/images/winter_icon.png";

interface ThemeMenuProps {
  onSeasonChange: (season: "spring" | "summer" | "fall" | "winter") => void;
  currentSeason: string;
}

const ThemeMenu: React.FC<ThemeMenuProps> = ({ onSeasonChange, currentSeason }) => {
  const seasons = ["spring", "summer", "fall", "winter"] as const;
  
  return (
    <div className='flex flex-row self-end pr-4 pt-4'>
        <ThemeButton imgSrc={springIcon} alt='springIcon' onClick={() => onSeasonChange('spring')}/>
        <ThemeButton imgSrc={summerIcon} alt='springIcon' onClick={() => onSeasonChange('summer')}/>
        <ThemeButton imgSrc={fallIcon} alt='springIcon' onClick={() => onSeasonChange('fall')}/>
        <ThemeButton imgSrc={winterIcon} alt='springIcon' onClick={() => onSeasonChange('winter')}/>
    </div>
  );
}

export default ThemeMenu;