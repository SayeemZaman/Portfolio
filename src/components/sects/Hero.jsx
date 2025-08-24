import { useContext } from "react";
import { ShowForm } from "../../contexts/ShowForm";
import profileImg from "../../assets/profile.jpeg";

export default function Hero() {
  const { toggleForm } = useContext(ShowForm);

  return (
    <div id="home" className="sect relative top-[80px]">
      <p className="bg-cornsilk text-mikado-yellow dark:bg-black-olive dark:text-saffron text-base py-[12px] px-[16px] font-bold self-start">
        Hi! I'm Sayeem Zaman
      </p>
      <h1 className="text-3xl font-bold dark:text-white">
        Freelance - Frontend Web Developer
      </h1>
      <p className="prg">
        I build Portfolio & Landing pages using design clients provide me.
      </p>
      <button
        onClick={toggleForm}
        className="self-start bg-veronica text-white font-bold py-[12px] px-[24px] hover:bg-light-veronica transition duration-300"
      >
        Contact
      </button>
      <img src={profileImg} alt="Profile picture" className="w-full" />
    </div>
  );
}
