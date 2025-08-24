export default function Social({ id, name, icon, link }) {
  function handleClick() {
    window.open(link);
  }

  return (
    <button onClick={handleClick} className="w-[28px] relative bottom-[16px]">
      <img src={icon} alt={`${name} icon`} className={(id === 0 || id === 2) ? "dark:filter dark:invert" : ""} />
    </button>
  );
}
