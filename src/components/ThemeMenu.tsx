import React from "react";
import ThemeButton from "./ThemeButton";
// Images
import springIcon from "../assets/images/spring_icon.png";
import summerIcon from "../assets/images/summer_icon.png";
import fallIcon from "../assets/images/fall_icon.png";
import winterIcon from "../assets/images/winter_icon.png";
import beachIcon from "../assets/images/Pink_scallop_shell.png";

interface ThemeMenuProps {
  onSeasonChange: (season: "spring" | "summer" | "fall" | "winter" | "beach") => void;
  currentSeason: string;
}

const ThemeMenu: React.FC<ThemeMenuProps> = ({
  onSeasonChange,
  currentSeason,
}) => {
  return (
    <div className="flex flex-row self-end pr-4 pt-4">
      <ThemeButton
        imgSrc={springIcon}
        alt="springIcon"
        bgElement="#7CF3B6"
        onClick={() => onSeasonChange("spring")}
        season="spring"
        currentSeason={currentSeason}
      />
      <ThemeButton
        imgSrc={summerIcon}
        alt="springIcon"
        bgElement="rgb(253,253,150)"
        onClick={() => onSeasonChange("summer")}
        season="summer"
        currentSeason={currentSeason}
      />
      <ThemeButton
        imgSrc={beachIcon}
        alt="beachIcon"
        bgElement="#FFB4AE"
        onClick={() => onSeasonChange("beach")}
        season="beach"
        currentSeason={currentSeason}
      />
      <ThemeButton
        imgSrc={fallIcon}
        alt="springIcon"
        bgElement="rgb(255,179,71)"
        onClick={() => onSeasonChange("fall")}
        season="fall"
        currentSeason={currentSeason}
      />
      <ThemeButton
        imgSrc={winterIcon}
        alt="springIcon"
        bgElement="rgb(167, 199, 231)"
        onClick={() => onSeasonChange("winter")}
        season="winter"
        currentSeason={currentSeason}
      />
    </div>
  );
};

export default ThemeMenu;
