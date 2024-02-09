import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import GameCard from "./GameCard";
import Game from "../types/Game";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  games: Game[] | undefined;
}

const GameContainer = ({ title, games }: Props) => {
  return (
    <div className='px-2 lg:px-16 mt-3'>
      <div className='flex items-center justify-between mb-2'>
        <h1 className='text-2xl font-bold font-mono'>{title}</h1>
        <div className='flex items-center space-x-2'>
          <FaLongArrowAltLeft className='text-2xl cursor-pointer text-gray-700' />
          <FaLongArrowAltRight className='text-2xl cursor-pointer' />
        </div>
      </div>
      <div className='pt-5 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
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
