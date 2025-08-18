import SectHead from "./SectHead";
import Social from "./Social";
import xLogo from "../assets/twitter.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import igLogo from "../assets/instagram.png";

const data = [
  { title: "Contact", content: "sayeemzaman00@gmail.com" },
  { title: "Date of birth", content: "3rd July, 2008" },
  { title: "Languages", content: "English, Bangla, Hindi" },
];

const social = [
  {
    name: "github",
    icon: githubLogo,
    link: "https://github.com/SayeemZaman",
  },
  {
    name: "linkedin",
    icon: linkedinLogo,
    link: "https://linkedin.com/in/sayeem-zaman-55b911301",
  },
  {
    name: "x",
    icon: xLogo,
    link: "https://x.com/SayeemZaman",
  },
  {
    name: "instagram",
    icon: igLogo,
    link: "https://instagram.com/codebuild0/",
  },
];

function Info({ title, content }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="font-semibold text-antiflash-white-2">{title}</p>
      <p className="font-semibold">{content}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="sect">
      <SectHead name="About Me" />
      <h2 className="font-bold text-3xl">Hi! I'm Sayeem Zaman</h2>

      <p className="prg">
        I'm a Frontend Web Developer, I make Websites using the design clients
        provide me, I primarily make Portfolio & Landing pages. I use the Tech
        Stack: Vite + React + Tailwind. I have Experience in HTML, CSS, Sass,
        JavaScript, JQuery, React, Tailwind & Git. I usually Complete Projects
        in 1-2 weeks. I hope you have design or a designer for your Project.
      </p>

      <div className="flex flex-col gap-[16px]">
        {data.map((item, index) => (
          <Info key={index} title={item.title} content={item.content} />
        ))}
      </div>

      <p className="font-semibold text-antiflash-white-2">Social Media</p>
      <div className="flex gap-[12px]">
        {social.map((btn, index) => (
          <Social key={index} name={btn.name} icon={btn.icon} link={btn.link} />
        ))}
      </div>
    </div>
  );
}
