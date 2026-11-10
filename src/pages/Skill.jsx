import { FaReact, FaFigma, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", level: 85, Icon: FaReact },
  { name: "Figma", level: 85, Icon: FaFigma },
  { name: "HTML/CSS", level: 95, Icon: FaHtml5 },
  { name: "Next.js", level: 80, Icon: SiNextdotjs },
  { name: "JavaScript", level: 60, Icon: FaJs },
  { name: "GitHub", level: 90, Icon: FaGithub },
];

export default function Skill() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <ul className="flex max-w-xl flex-wrap gap-4">
        {skills.map(({ name, level, Icon }) => (
          <li key={name} className="flex w-20 flex-col items-center gap-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-700 bg-neutral-900">
              <Icon className="text-2xl" />
            </div>
            <p className="text-[10px] text-orange-500">{level}%</p>
            <p className="text-[10px] text-neutral-300">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}