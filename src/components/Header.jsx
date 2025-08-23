import NavBtn from "./NavBtn";
import Nav from "./Nav";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <header className="w-full h-[80px] p-[16px] z-10 bg-rich-black text-white flex justify-between items-center fixed top-0 left-0">
        <p className="text-white text-xl font-bold">Sayeem</p>
        <NavBtn isActive={isActive} setIsActive={setIsActive} />
      </header>
      {isActive && <Nav setIsActive={setIsActive} />}
    </div>
  );
}
