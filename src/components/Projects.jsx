import SectHead from "./SectHead";
import ProjectCard from "./ProjectCard";
import ecom from "../assets/ecom-project.png";
import form from "../assets/form-project.png";
import preview from "../assets/preview-project.jpg";

const data = [
  {
    img: ecom,
    title: "E-commerce Product Page",
    desc: "This is a webpage with image slider, cart, responsive layout and many more.",
    link: "https://e-commerce-product-page-coral-beta.vercel.app/",
  },
  {
    img: form,
    title: "Multi-Step Form",
    desc: "This is a form ui with multiple pages, it has personal info & plan selector, breadcrumbs, a final page and many more",
    link: "https://multi-step-form-theta-ten.vercel.app/",
  },
  {
    img: preview,
    title: "Product Preview Card",
    desc: "This is a simple product Preview card made with react.",
    link: "https://product-preview-card-omega-five.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="sect dark:bg-rich-black-2">
      <SectHead name="Selected Work" />
      <p className="prg text-center">These are some of my best projects</p>
      <div className="flex flex-col gap-[16px]">
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
