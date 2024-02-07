import { useState } from "react";
import DropDown from "./DropDown";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const platforms: string[] = [
    "Pc",
    "Playstation4",
    "Xbox one",
    "Ios",
    "Android",
    "Nintendo switch",
  ];

  const genres: string[] = [
    "Action",
    "Strategy",
    "Rpg",
    "Shooter",
    "Adventure",
    "Puzzle",
    "Racing",
    "Sports",
  ];

  const top: string[] = [
    "Best of the year",
    "Popular in 2023",
    "All time top 250",
  ];

  return (
    <nav className='absolute z-[100] text-lg w-full flex items-center justify-between px-2 lg:px-20 py-2 md:py-4'>
      <h1 className='text-2xl md:hidden'>LOGO</h1>
      <div className='hidden md:flex items-center justify-between space-x-9'>
        <h1 className='text-2xl'>LOGO</h1>
        <DropDown items={platforms} title='Platforms' />
        <DropDown items={genres} title='Genres' />
        <DropDown items={top} title='Top' />
      </div>
      <input
        type='text'
        placeholder='Search Games'
        className='ml-auto duration-200 hover:border border-teal-400 bg-gray-900 outline-none pl-5 py-1.5 rounded-full w-52 placeholder:text-[16px] text-[16px]'
      />
      <button className='md:hidden ml-4 px-1.5 py-1 border-2 border-white rounded-lg'>
        {nav ? (
          <CgClose onClick={() => setNav(false)} size={23} />
        ) : (
          <TiThMenu onClick={() => setNav(true)} size={23} />
        )}
      </button>
      <div
        className={`md:hidden absolute right-4 top-12 flex flex-col ${
          !nav && "hidden"
        }`}>
        <DropDown items={platforms} title='Platforms' />
        <DropDown items={genres} title='Genres' />
        <DropDown items={top} title='Top' />
      </div>
    </nav>
  );
};

export default NavBar;
