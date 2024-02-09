import Game from "../types/Game";

interface Props {
  game: Game;
}
const Main = ({ game }: Props) => {
  const genres = game?.genres;
  return (
    <div className='w-full h-[500px] text-white'>
      <div className='w-full h-full relative'>
        <div className='px-16 absolute w-full h-[500px] bg-gradient-to-b from-[#0000007d]'></div>
        <div className='px-16 absolute w-full h-[500px] bg-gradient-to-r from-[#000000c1]'></div>
        <img
          className='w-full h-full object-cover'
          src={game?.background_image}
          alt={game?.name}
        />
        <div className='space-y-4 absolute top-1/2 lg:left-36 md:left-16 px-4'>
          <div className='flex space-x-2'>
            {genres?.map((genre) => (
              <p
                key={genre.id}
                className='bg-gradient-to-r from-purple-500 to-indigo-900 font-bold text-transparent bg-clip-text pl-1'>
                {genre.name}
              </p>
            ))}
          </div>
          <h1 className='text-3xl md:text-5xl font-bold pb-5'>{game?.name}</h1>
          <button className='bg-purple-800 hover:bg-purple-700 duration-200 rounded-full px-10 font-semibold py-2 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.3)] shadow-purple-500'>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
