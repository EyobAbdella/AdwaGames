const NavBar = () => {
  return (
    <nav className='text-lg w-full flex items-center justify-between px-16 py-4'>
      <div className='text-2xl'>LOGO</div>
      <div className='flex space-x-8'>
        <input
          type='text'
          placeholder='Search Games'
          className='input focus:border-none input-bordered input-sm input-info w-full max-w-52'
        />
        <p>Top</p>
        <p>New</p>
        <p>Action</p>
        <p>Sports</p>
        <p>Racing</p>
      </div>
    </nav>
  );
};

export default NavBar;
