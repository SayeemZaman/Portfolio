import { useContext } from "react";
import { ShowForm } from "../../contexts/ShowForm";
import profileImg from "../../assets/profile.jpeg";

export default function Hero() {
  const { toggleForm } = useContext(ShowForm);

  return (
    <div
      id="home"
      className="sect relative top-[80px] lg:!grid lg:!grid-cols-2 lg:!gap-[8px] lg:!p-0 lg:!mb-[80px]"
    >
      <div className="flex flex-col gap-[24px] lg:py-[24px] lg:px-[64px] lg:items-center">
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
      </div>
      <div>
        <img
          src={profileImg}
          alt="Profile picture"
          className="w-full lg:h-full object-cover"
        />
      </div>
    </div>
  );
}
