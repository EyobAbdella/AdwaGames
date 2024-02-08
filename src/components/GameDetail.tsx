import GameImage from "../../public/gameImage.jpg";
import Game from "../types/Game";
import GameInfo from "./GameInfo";
import GameScreenShot from "./GameScreenshot";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const GameDetail = () => {
  return (
    <div className='relative pb-4'>
      <div className='px-16 absolute w-full h-[500px] bg-gradient-to-tr from-[#10071b]'></div>

      <figure>
        <img
          className='h-[500px] w-full object-cover'
          src={GameImage}
          alt='game'
        />
      </figure>
      <div className='absolute top-1/4 lg:left-32 md:left-28 px-3 text-white'>
        <PlatformIcons />
        <h1 className='text-4xl md:text-5xl font-semibold '>MoonLighter</h1>
        <button className='text-black font-semibold bg-teal-500 hover:bg-teal-400 duration-300 rounded px-8 py-1.5 mt-5 text-lg'>
          Buy This Game
        </button>
      </div>
      <GameInfo />
      <GameScreenShot />
    </div>
  );
};

export default GameDetail;
