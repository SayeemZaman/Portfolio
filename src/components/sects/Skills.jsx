import SectHead from "../SectHead";
import SkillCard from "../SkillCard";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import jquery from "../../assets/jquery.png";
import git from "../../assets/git.png";
import sass from "../../assets/sass.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";

const lvl = ["Novice", "Beginner", "Proficient", "Advanced", "Expert"];
const data = [
  { name: "HTML", icon: html, level: lvl[2] },
  { name: "CSS", icon: css, level: lvl[2] },
  { name: "JavaScript", icon: js, level: lvl[3] },
  { name: "JQuery", icon: jquery, level: lvl[1] },
  { name: "Git", icon: git, level: lvl[2] },
  { name: "Sass", icon: sass, level: lvl[1] },
  { name: "React", icon: react, level: lvl[2] },
  { name: "Tailwind CSS", icon: tailwind, level: lvl[1] },
];

export default function Skills() {
  return (
    <div id="skills" className="sect">
      <SectHead name="Skills" />
      <p className="prg text-center">I can bring your design into reality</p>
      <div className=" grid grid-cols-2 gap-[16px]">
        {data.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}
