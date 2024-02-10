import { SiWindows } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Platform from "../types/Platform";
import React from "react";

interface Props {
  platforms: Platform[];
}

type IconMap = {
  [key: string]: JSX.Element;
};

const PlatformIcons = ({ platforms = [] }: Props) => {
  console.log(platforms);
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
          {/* <FaLinux onClick={() => console.log(platform)} /> */}
          {iconMap[platform.slug]}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PlatformIcons;
