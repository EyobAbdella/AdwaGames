import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className='bg-zinc-950 py-4'>
      <div className='container mx-auto px-5 space-y-4'>
        <div className='flex flex-col md:flex-row justify-between gap-5 px-4'>
          <div className='max-w-96'>
            <h4 className='text-slate-200 text-lg'>About Me</h4>
            <p className='text-sm text-slate-300'>
              I'm a passionate web developer with a love for creating dynamic
              and user-friendly websites.
            </p>
            <p className='text-sm text-slate-300'>
              I specialize in full-stack development with extensive expertise in
              Python, JavaScript, Django, React, Tailwind CSS, etc.
            </p>
          </div>
          <div>
            <h4 className='text-slate-200 text-lg my-0.5'>
              Need a Website for Your Business?
            </h4>
            <p className='text-sm text-slate-300'>Contact Us Here:</p>
            <p className='text-sm text-slate-300 my-1'>
              Email: eyobabdellasharo@gmail.com
            </p>
          </div>
          <div>
            <h4 className='text-slate-200 text-lg'>Credits</h4>
            <p className='text-slate-300 text-sm'>
              Powered by
              <Link to='https://rawg.io/apidocs' className='hover:underline'>
                RAWG API
              </Link>
            </p>
            <p className='text-sm text-slate-300'>
              Designed and developed by
              <Link
                className='text-slate-300 hover:underline hover:text-blue-200 mx-1'
                to='https://eyob-tech.vercel.app/'>
                Eyob Tech
              </Link>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center my-4 max-w-[600px] mx-auto'>
          <div className='border-gray-500 border-t flex-grow'></div>
          <Link to='https://x.com/DevWithNikola' className='mx-2'>
            <FaXTwitter size={18} />
          </Link>
          <Link to='https://www.facebook.com/EyobAbdella1' className='mx-2'>
            <FaFacebook size={20} />
          </Link>
          <Link
            to='https://www.linkedin.com/in/eyob-abdella-532554262/'
            className='mx-2'>
            <CiLinkedin size={23} />
          </Link>
          <div className='border-gray-500 border-t flex-grow'></div>
        </div>
        <p className='text-center text-gray-400'>
          &copy; 2024 Eyob Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
