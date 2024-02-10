import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data } = useScreenshot(gameId);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  var slider = document.getElementById("slider");
  slider?.addEventListener("scroll", function () {
    setIsAtEnd(slider!.scrollLeft + slider!.clientWidth >= slider!.scrollWidth);
    setIsAtStart(slider?.scrollLeft === 0);
  });
  const slideLeft = () => {
    slider!.scrollLeft -= 500;
  };
  const slideRight = () => {
    slider!.scrollLeft += 500;
  };
  return (
    <div className='max-w-2xl lg:max-w-4xl xl:max-w-[68rem] px-2   mx-auto mt-8 flex items-center space-x-2 md:space-x-2'>
      <GrNext
        onClick={slideLeft}
        className={`cursor-pointer ${isAtStart ? "text-slate-500" : ""}`}
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
        className={`cursor-pointer ${isAtEnd ? "text-red-700" : ""}`}
        size={30}
      />
    </div>
  );
};

export default GameScreenShot;
