export default function ProjectCard({ img, title, desc, link }) {
  function handleClick() {
    window.open(link);
  }

  return (
    <div className="flex flex-col gap-[16px] border border-antiflash-white hover:border-rich-black transition">
      <img src={img} />
      <div className="flex flex-col p-[32px] gap-[16px]">
        <p className="text-2xl font-bold">{title}</p>
        <p className="prg">{desc}</p>
        <button
          onClick={handleClick}
          className="border-2 border-rich-black self-start py-[8px] px-[16px] font-bold hover:bg-rich-black hover:text-white transition"
        >
          View Project
        </button>
      </div>
    </div>
  );
}
