const data = [
  { name: "Home", link: "#home" },
  { name: "About Me", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  {
    name: "Contact",
    link: "#contact",
    xstyle: "bg-white py-[8px] px-[16px] hover:opacity-80 transition",
    xstyle2: "text-black",
  },
];

export default function DesktopNav() {
  return (
    <nav className="hidden md:!flex flex-row gap-[8px]">
      <ul className="flex gap-[24px]">
        {data.map((item, index) => (
          <li key={index} className={`center ${item.xstyle}`}>
            <a
              href={item.link}
              className={`font-bold font-xl text-white ${item.xstyle2}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
