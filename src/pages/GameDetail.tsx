import { Link, useParams } from "react-router-dom";
import GameInfo from "../components/GameInfo";
import GameScreenShot from "../components/GameScreenshot";
import PlatformIcons from "../components/PlatformIcons";
import useGame from "../hooks/useGame";
import useGameStore from "../hooks/useGameStore";
import Footer from "../components/Footer";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { data } = useGameStore(game?.id!);
  if (isLoading)
    return (
      <div className='text-center pt-16'>
        <span className='loading loading-ring w-96 my-auto mx-auto'></span>
      </div>
    );
  if (error || !game) throw error;
  const store = data?.results;
  console.log(store);
  return (
    <div className='relative'>
      <div className='px-16 absolute w-full h-[500px] bg-gradient-to-tr from-[#10071b]'></div>

      <figure>
        <img
          className='h-[500px] w-full object-cover'
          src={game.background_image}
          alt={game.name}
        />
      </figure>
      <div className='absolute top-60 lg:left-32 md:left-28 px-3 text-white'>
        <PlatformIcons
          platforms={game.parent_platforms?.map((p) => p.platform)}
        />
        <h1 className='text-4xl md:text-5xl font-semibold '>{game.name}</h1>
        <button className='text-black font-semibold bg-teal-500 hover:bg-teal-400 duration-300 rounded px-8 py-1.5 mt-5 text-lg'>
          {store && <Link to={store[0].url}>Buy This Game</Link>}
        </button>
      </div>
      <GameInfo game={game} />
      <GameScreenShot gameId={game.id} />
      <Footer />
    </div>
  );
};

export default GameDetail;
