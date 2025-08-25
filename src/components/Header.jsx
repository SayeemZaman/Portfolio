import NavBtn from "./NavBtn";
import Nav from "./Nav";
import DesktopNav from "./DesktopNav";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <header
        className="w-full h-[80px] p-[16px] z-20 bg-rich-black flex justify-between items-center
        fixed top-0 left-0 border-b-2 border-raisin-black-2"
      >
        <p className="text-white text-xl font-bold">Sayeem</p>
        <NavBtn isActive={isActive} setIsActive={setIsActive} />
        <DesktopNav />
      </header>
      {isActive && <Nav setIsActive={setIsActive} />}
    </div>
  );
}
