import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import GameCard from "./GameCard";
import Game from "../types/Game";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  title: string;
  games: Game[] | undefined;
  rowId: number;
}

const GameContainer = ({ title, games, rowId }: Props) => {
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  var slider = document.getElementById("slider" + rowId);
  slider?.addEventListener("scroll", function () {
    setIsAtStart(slider?.scrollLeft === 0);
    setIsAtEnd(slider!.scrollLeft + slider!.clientWidth >= slider!.scrollWidth);
  });
  const slideLeft = () => {
    slider!.scrollLeft -= 500;
  };
  const slideRight = () => {
    slider!.scrollLeft += 500;
  };
  return (
    <div className='px-2 lg:px-16 mt-3'>
      <div className='flex items-center justify-between mb-2'>
        <h1 className='text-2xl font-bold font-mono'>{title}</h1>
        <div className='flex items-center space-x-3'>
          <FaLongArrowAltLeft
            onClick={slideLeft}
            className={`text-2xl cursor-pointer ${
              isAtStart ? "text-gray-700" : ""
            }`}
          />
          <FaLongArrowAltRight
            onClick={slideRight}
            className={`text-2xl cursor-pointer ${
              isAtEnd ? "text-gray-700" : ""
            }`}
          />
        </div>
      </div>
      <div
        id={"slider" + rowId}
        className='pt-5 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
        {games?.map((game) => (
          <Link to={`/games/${game.slug}`} key={game.id}>
            <GameCard game={game} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameContainer;
