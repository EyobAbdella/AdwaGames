const GameInfo = () => {
  return (
    <div className='max-w-2xl lg:max-w-4xl xl:max-w-5xl px-2 mx-auto grid grid-cols-1 place-items-center lg:grid-cols-2 mt-12 gap-x-20'>
      <div className=''>
        <p className='text-yellow-500 font-semibold'>RATING 4.8</p>
        <h1 className='text-2xl font-bold mb-6 mt-2'>About the game</h1>
        <p className='text-slate-300'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quae
          earum rem perferendis fugit magni, vel perspiciatis repellat expedita
          deserunt culpa voluptates, nobis temporibus animi iusto? Tempora
          minima error quos voluptatem quo placeat obcaecati optio hic sapiente?
          Facilis voluptatum iste, deserunt sequi neque ducimus vitae? Quo iusto
          libero eos illum!
        </p>
      </div>
      <div className='space-y-2 mt-11 w-full'>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Genres: </p>
          <p>Action, Adventure, RPG</p>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Developer: </p>
          <p>Digital Sun</p>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Website: </p>
          <p>www.moonlighterthegame.com</p>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Release date: </p>
          <p>www.moonlighterthegame.com</p>
        </div>
        <div className='flex items-center w-96 space-x-2 text-white '>
          <p className='w-24 text-slate-300 text-sm'>Publisher: </p>
          <p>Action, Adventure, RPG</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
