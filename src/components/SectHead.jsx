import starImg from "../assets/star.png";

export default function SectHead({ name, className }) {
  return (
    <div
      className={`self-center bg-veronica text-white font-bold gap-[8px] rounded-full inline-flex items-center justify-center py-[8px] px-[16px] dark:z-10 ${className}`}
    >
      <img src={starImg} alt="Star Icon" className="w-[16px] h-[16px]" />
      <h2>{name}</h2>
    </div>
  );
}
