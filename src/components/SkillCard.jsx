export default function SkillCard({ icon, name, level }) {
  return (
    <div className="rounded-full flex flex-col gap-[4px] justify-center items-center p-[16px] border border-antiflash-white w-full aspect-square">
      <img className="w-[32px]" src={icon} alt={`${icon} Icon`} />
      <div className="center">
        <p className="font-bold">{name}</p>
        <p className="font-medium font-xs text-antiflash-white">{level}</p>
      </div>
    </div>
  );
}
