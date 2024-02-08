import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";

const GameContainer = () => {
  const { data } = useGames();
  console.log(data);

  return (
    <div className='px-2 lg:px-16 mt-3'>
      <div className='flex items-center justify-between mb-2'>
        <h1 className='text-xl font-bold font-mono'>Top Games</h1>
        <div className='flex items-center space-x-2'>
          <FaLongArrowAltLeft className='text-2xl cursor-pointer text-gray-700' />
          <FaLongArrowAltRight className='text-2xl cursor-pointer' />
        </div>
      </div>
      <div className='pt-5 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
};

export default GameContainer;
