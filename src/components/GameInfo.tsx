import React from "react";
import Game from "../types/Game";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameInfo = ({ game }: Props) => {
  const genres = game?.genres;
  const developers = game?.developers;
  const publishers = game?.publishers;
  return (
    <div className='max-w-2xl lg:max-w-4xl xl:max-w-5xl px-2 mx-auto grid grid-cols-1 place-items-center lg:grid-cols-2 mt-12 gap-x-20 gap-y-10'>
      <div className=''>
        <p className='text-yellow-500 font-semibold'>RATING {game?.rating}</p>
        <h1 className='text-3xl font-bold mb-6 mt-2'>About the game</h1>
        <p className='text-slate-300'>{game?.description_raw}</p>
      </div>
      <div className='space-y-2 mb-auto w-full'>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Genres: </p>
          <div className='flex flex-wrap space-x-1'>
            {genres?.map((genre, index) => (
              <React.Fragment key={genre.id}>
                {genre.name}
                {index !== genres.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Developer: </p>
          <div className='flex space-x-1'>
            {developers.map((developer, index) => (
              <React.Fragment key={developer.id}>
                {developer.name}
                {index !== developers.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-32 text-slate-300 text-sm'>Website: </p>
          <Link to={game?.website} className='w-full'>
            {game?.website}
          </Link>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Release date: </p>
          <p>{new Date(game?.released).toLocaleDateString("en-US")}</p>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Updated: </p>
          <p>{new Date(game?.updated).toLocaleDateString("en-US")}</p>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Publisher: </p>
          <div className='flex space-x-1'>
            {publishers.map((publisher, index) => (
              <React.Fragment key={publisher?.id}>
                {publisher?.name}
                {index !== publishers.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
