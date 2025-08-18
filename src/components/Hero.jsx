import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <div className="sect relative top-[80px]">
      <p className="bg-cornsilk text-mikado-yellow text-base py-[12px] px-[16px] font-bold self-start">
        Hi! I'm Sayeem Zaman
      </p>
      <h1 className="text-3xl font-bold">Freelance - Frontend Web Developer</h1>
      <p className="prg">
        I build Portfolio & Landing pages using design clients provide me.
      </p>
      <button className="self-start bg-veronica text-white font-bold py-[12px] px-[24px] hover:bg-light-veronica transition duration-300">
        Contact
      </button>
      <img src={profileImg} alt="Profile picture" className="w-full" />
    </div>
  );
}
