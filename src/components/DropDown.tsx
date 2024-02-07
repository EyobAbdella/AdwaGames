import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropDownProps {
  title: string;
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ title, items }) => {
  return (
    <div className='dropdown'>
      <div
        tabIndex={0}
        role='button'
        className='text-[15px] border-none text-slate-200 min-h-10 h-10 btn m-1 gap-0 bg-transparent hover:bg-transparent font-semibold'>
        {title}
        <RiArrowDropDownLine size={25} />
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content bg-gray-950 z-[1] menu p-2 shadow rounded-box w-fit min-w-36'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
