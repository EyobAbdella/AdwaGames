import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import GameCard from "./GameCard";

const GameContainer = () => {
  return (
    <div className='px-16'>
      <div className='flex items-center justify-between mb-2'>
        <h1 className='text-lg font-bold font-mono'>Top Games</h1>
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
