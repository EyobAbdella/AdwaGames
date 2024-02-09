import { useParams } from "react-router-dom";
import GameInfo from "../components/GameInfo";
import GameScreenShot from "../components/GameScreenshot";
import PlatformIcons from "../components/PlatformIcons";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading)
    return <span className='loading loading-ring w-40 my-auto mx-auto'></span>;
  if (error || !game) throw error;
  console.log(game && game);
  return (
    <div className='relative pb-4'>
      <div className='px-16 absolute w-full h-[500px] bg-gradient-to-tr from-[#10071b]'></div>

      <figure>
        <img
          className='h-[500px] w-full object-cover'
          src={game.background_image}
          alt={game.name}
        />
      </figure>
      <div className='absolute top-1/4 lg:left-32 md:left-28 px-3 text-white'>
        <PlatformIcons />
        <h1 className='text-4xl md:text-5xl font-semibold '>{game.name}</h1>
        <button className='text-black font-semibold bg-teal-500 hover:bg-teal-400 duration-300 rounded px-8 py-1.5 mt-5 text-lg'>
          Buy This Game
        </button>
      </div>
      <GameInfo game={game} />
      <GameScreenShot gameId={game.id} />
    </div>
  );
};

export default GameDetail;