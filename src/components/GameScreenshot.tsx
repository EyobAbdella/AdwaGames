import { GrNext, GrPrevious } from "react-icons/gr";
import useScreenshot from "../hooks/useScreenshot";
import useScrollSlider from "../hooks/useScrollSlider";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data } = useScreenshot(gameId);
  const { isAtEnd, isAtStart, slideLeft, slideRight } =
    useScrollSlider("slider");
  return (
    <div className='max-w-2xl lg:max-w-4xl xl:max-w-[68rem] px-2   mx-auto mt-8 flex items-center space-x-2 md:space-x-2'>
      <GrNext
        onClick={slideLeft}
        className={`cursor-pointer text-white ${
          isAtStart ? " text-gray-600" : ""
        }`}
        size={30}
      />
      <div
        id='slider'
        className='space-x-4 w-full min-h-full overflow-x-scroll flex scrollbar-hide scroll-smooth'>
        {data?.results.map((file) => (
          <img
            key={file.id}
            className='min-w-80 h-48 object-cover rounded-md'
            src={file.image}
            alt='game-screenshot'
          />
        ))}
      </div>

      <GrPrevious
        onClick={slideRight}
        className={`cursor-pointer text-white ${
          isAtEnd ? " text-gray-600" : ""
        }`}
        size={30}
      />
    </div>
  );
};

export default GameScreenShot;
