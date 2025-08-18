export default function Social({ name, icon, link }) {
  function handleClick() {
    window.open(link);
  }

  return (
    <button onClick={handleClick} className="w-[28px] relative bottom-[16px]">
      <img src={icon} alt={`${name} icon`} />
    </button>
  );
}
