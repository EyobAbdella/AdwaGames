import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import GameCard from "./GameCard";
import Game from "../types/Game";
import { Link } from "react-router-dom";
import useScrollSlider from "../hooks/useScrollSlider";

interface Props {
  title: string;
  games: Game[] | undefined;
  rowId: number;
}

const GameContainer = ({ title, games, rowId }: Props) => {
  const { isAtEnd, isAtStart, slideLeft, slideRight } = useScrollSlider(
    "slider" + rowId
  );
  return (
    <div className='px-2 lg:px-16 mt-3'>
      <div className='flex items-center justify-between mb-2'>
        {games ? (
          <h1 className='text-2xl font-bold font-mono'>{title}</h1>
        ) : (
          <div className='skeleton w-52 h-7'></div>
        )}
        <div className='flex items-center space-x-3'>
          <FaLongArrowAltLeft
            onClick={slideLeft}
            className={`text-white text-2xl cursor-pointer ${
              isAtStart ? "text-gray-600" : ""
            }`}
          />
          <FaLongArrowAltRight
            onClick={slideRight}
            className={`text-white text-2xl cursor-pointer ${
              isAtEnd ? "text-gray-600" : ""
            }`}
          />
        </div>
      </div>
      <div
        id={"slider" + rowId}
        className='pt-5 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
        {games ? (
          <>
            {games?.map((game) => (
              <Link to={`/games/${game.slug}`} key={game.id}>
                <GameCard game={game} />
              </Link>
            ))}
          </>
        ) : (
          <>
            <div className='skeleton h-64 w-64 mx-2'></div>
            <div className='skeleton h-64 w-64 mx-2'></div>
            <div className='skeleton h-64 w-64 mx-2'></div>
            <div className='skeleton h-64 w-64 mx-2'></div>
            <div className='skeleton h-64 w-64 mx-2'></div>
          </>
        )}
      </div>
    </div>
  );
};

export default GameContainer;
