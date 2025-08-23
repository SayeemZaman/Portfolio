const data = [
  { name: "Home", link: "#home" },
  { name: "About Me", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-[80px] z-10 bg-rich-black w-full py-[16px] px-[32px] border-t border-antiflash-white">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="h-[48px] center">
            <a
              className="text-white font-xl font-medium center"
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
