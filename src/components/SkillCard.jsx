export default function SkillCard({ icon, name, level }) {
  return (
    <div
      className="rounded-full center gap-[4px] p-[16px] border border-antiflash-white
      dark:border-raisin-black hover:border-cool-gray aspect-square transition flex-[1_1_128px] max-w-[160px]"
    >
      <img
        className={`w-[32px] ${
          name === "JQuery" ? "dark:filter dark:invert" : ""
        }`}
        src={icon}
        alt={`${icon} Icon`}
      />
      <div className="center">
        <p className="font-bold dark:text-white">{name}</p>
        <p className="font-medium font-xs text-antiflash-white dark:font-medium">
          {level}
        </p>
      </div>
    </div>
  );
}
