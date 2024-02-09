import GameImage from "../../public/gameImage.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data } = useScreenshot(gameId);
  return (
    <div className='max-w-2xl lg:max-w-4xl xl:max-w-[68rem] px-1 mx-auto mt-8 flex items-center space-x-2 md:space-x-2'>
      <GrNext className='text-slate-500' size={30} />
      <div className='space-x-4 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
        {data?.results.map((file) => (
          <img
            key={file.id}
            className='min-w-80 h-48 object-cover rounded-md'
            src={file.image}
            alt='game-screenshot'
          />
        ))}
      </div>
      <GrPrevious size={30} />
    </div>
  );
};

export default GameScreenShot;
