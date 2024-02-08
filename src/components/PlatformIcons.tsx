import { SiWindows } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import NintendoSwitch from "../assets/NintendoSwitch.svg";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const PlatformIcons = () => {
  return (
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
  );
};

export default PlatformIcons;
