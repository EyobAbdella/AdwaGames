import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaApple, FaLinux, FaPlaystation, FaXbox } from "react-icons/fa";
import { IoIosPhonePortrait, IoLogoAndroid } from "react-icons/io";
import { SiNintendo, SiWindows } from "react-icons/si";
import Platform from "../types/Platform";

interface Props {
  platforms: Platform[];
}

type IconMap = {
  [key: string]: JSX.Element;
};

const PlatformIcons = ({ platforms = [] }: Props) => {
  const iconMap: IconMap = {
    pc: <SiWindows />,
    playstation: <FaPlaystation size={23} />,
    xbox: <FaXbox size={19} />,
    nintendo: <SiNintendo />,
    android: <IoLogoAndroid size={23} />,
    ios: <IoIosPhonePortrait size={23} />,
    mac: <FaApple size={23} />,
    linux: <FaLinux size={23} />,
    web: <BsGlobe size={19} />,
  };
  return (
    <div className='text-slate-200 flex items-center mb-2 space-x-2 pl-1'>
      {platforms.map((platform) => (
        <React.Fragment key={platform.id}>
          <React.Fragment />
          {iconMap[platform.slug]}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PlatformIcons;
