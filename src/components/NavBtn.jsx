import menu from "../assets/menu-burger.png";

export default function NavBtn({ isActive, setIsActive }) {
  return (
    <button
      className="w-[32px] md:hidden"
      onClick={() => setIsActive(!isActive)}
    >
      <img src={menu} alt="Navigation Button" className="w-[24px]" />
    </button>
  );
}
