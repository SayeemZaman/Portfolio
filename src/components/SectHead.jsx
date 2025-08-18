import starImg from "../assets/star.png";

export default function SectHead({ name, className }) {
  return (
    <div
      className={`self-start bg-veronica text-white font-bold p-[16px] gap-[8px] rounded-full inline-flex items-center justify-center py-[12px] px-[20px] ${className}`}
    >
      <img src={starImg} alt="Star Icon" className="w-[16px] h-[16px]" />
      <h2>{name}</h2>
    </div>
  );
}
