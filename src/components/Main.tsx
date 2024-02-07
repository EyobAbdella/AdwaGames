import GameImage from "../../public/gameImage.jpg";

const Main = () => {
  return (
    <div className='w-full h-[500px] text-white'>
      <div className='w-full h-full relative'>
        <div className='px-16 absolute w-full h-[500px] bg-gradient-to-b from-[#0000007d]'></div>
        <div className='px-16 absolute w-full h-[500px] bg-gradient-to-r from-[#000000c1]'></div>
        <img
          className='lg:px-16 w-full h-full object-cover'
          src={GameImage}
          alt='game'
        />
        <div className='space-y-4 absolute top-1/2 lg:left-36 md:left-16 px-4'>
          <p className='text-gray-500 pl-1'>Action</p>
          <h1 className='text-3xl md:text-5xl font-bold pb-5'>
            Hollow Knight: Sliksong
          </h1>
          <button className='bg-purple-800 hover:bg-purple-700 duration-200 rounded-full px-10 font-semibold py-2 shadow-[5px_5px_30px_5px_rgba(0,0,0,0.3)] shadow-purple-500'>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
