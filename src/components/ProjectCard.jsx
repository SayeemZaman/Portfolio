export default function ProjectCard({ img, title, desc, link }) {
  function handleClick() {
    window.open(link);
  }

  return (
    <div className="flex flex-col gap-[16px] border border-antiflash-white-2 hover:border-rich-black transition flex-[1_1_256px] max-w-[1024px]">
      <img src={img} alt="Project Preview Image" />
      <div className="flex flex-col p-[32px] pt-[16px] gap-[16px] dark:text-white">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="prg">{desc}</p>
        <button
          onClick={handleClick}
          className="border-2 border-cool-gray self-start py-[8px] px-[16px] font-bold hover:bg-rich-black hover:text-white transition"
        >
          View Project
        </button>
      </div>
    </div>
  );
}
