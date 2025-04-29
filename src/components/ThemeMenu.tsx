import React from 'react';
import ThemeButton from './ThemeButton';
// Images
import springIcon from "../assets/images/spring_icon.png";
import summerIcon from "../assets/images/summer_icon.png";
import fallIcon from "../assets/images/fall_icon.png";
import winterIcon from "../assets/images/winter_icon.png";

const ThemeMenu: React.FC = () => {
  return (
    <div className='flex flex-row self-end pr-4 pt-4'>
        <ThemeButton imgSrc={springIcon} alt='springIcon'/>
        <ThemeButton imgSrc={summerIcon} alt='springIcon'/>
        <ThemeButton imgSrc={fallIcon} alt='springIcon'/>
        <ThemeButton imgSrc={winterIcon} alt='springIcon'/>
    </div>
  );
}

export default ThemeMenu;