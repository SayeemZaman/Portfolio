export default function Social({ name, icon, link }) {
  function handleClick() {
    window.open(link);
  }

  return (
    <button onClick={handleClick}>
      <img src={icon} alt={`${name} icon`} />
    </button>
  );
}
