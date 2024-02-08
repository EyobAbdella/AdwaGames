import GameImage from "../../public/gameImage.jpg";
import useGames from "../hooks/useGames";
import { SiWindows } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import NintendoSwitch from "../assets/NintendoSwitch.svg";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

import GameScreenShot from "./GameScreenShot";
import GameInfo from "./GameInfo";

const GameDetail = () => {
  // const platforms =
  // const { data } = useGames();
  // console.log(data);

  return (
    <div className='relative pb-4'>
      <div className='px-16 absolute w-full h-[500px] bg-gradient-to-tr from-[#10071b]'></div>

      <figure>
        <img
          className='h-[500px] w-full object-cover'
          src={GameImage}
          alt='game'
        />
      </figure>
      <div className='absolute top-1/4 lg:left-32 md:left-28 px-3 text-white'>
        <div className='text-slate-200 flex items-center mb-2 space-x-2 pl-1'>
          <SiWindows />
          <FaPlaystation size={23} />
          <FaXbox size={19} />
          <FaApple size={23} />
          <img src={NintendoSwitch} alt='NintendoSwitch' />
          <IoLogoAndroid size={23} />
          <FaLinux size={22} />
          <IoIosPhonePortrait size={23} />
        </div>
        <h1 className='text-4xl md:text-5xl font-semibold '>MoonLighter</h1>
        <button className='text-black font-semibold bg-teal-500 hover:bg-teal-400 duration-300 rounded px-8 py-1.5 mt-5 text-lg'>
          Buy This Game
        </button>
      </div>
      <GameInfo />
      <GameScreenShot />
    </div>
  );
};

export default GameDetail;
