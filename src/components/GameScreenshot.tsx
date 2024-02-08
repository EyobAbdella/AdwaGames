import GameImage from "../../public/gameImage.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const GameScreenShot = () => {
  return (
    <div className='max-w-2xl lg:max-w-4xl xl:max-w-5xl px-1 mx-auto mt-8 flex items-center space-x-1 md:space-x-2'>
      <GrNext className='text-slate-500' size={30} />
      <div className='space-x-4 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
        {Array.from({ length: 8 }).map((_, index) => (
          <img
            key={index}
            className='min-w-80 h-48 object-cover rounded-md'
            src={GameImage}
            alt='game-screenshot'
          />
        ))}
      </div>
      <GrPrevious size={30} />
    </div>
  );
};

export default GameScreenShot;
