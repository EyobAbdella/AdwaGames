import Game from "../types/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className='h-64'>
      <div className='mb-auto w-64 relative hover:-translate-y-4 duration-500'>
        <p className='absolute top-2 right-6 shadow shadow-slate-500 bg-indigo-700 rounded-full px-2 py-1 text-xs text-gray-300'>
          {game.rating}
        </p>
        <div className='gap-y-1'>
          <figure>
            <img
              className='w-60 h-40 object-cover rounded-lg'
              src={game.background_image}
              alt='game'
            />
          </figure>
          <h1 className='text-slate-300 px-1 pt-1'>{game.name}</h1>
          <div className='flex space-x-0.5'>
            {game.genres.map((genre) => (
              <p key={genre.id} className='text-sm text-slate-500 px-1'>
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
