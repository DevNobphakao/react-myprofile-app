import { FiCode, FiLayout, FiPenTool } from "react-icons/fi";

const specs = [
  {
    title: "Front-end developer",
    text: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
    Icon: FiCode,
  },
  {
    title: "UI/UX Designer",
    text: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
    Icon: FiLayout,
  },
  {
    title: "Graphic designer",
    text: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
    Icon: FiPenTool,
  },
];

export default function Spec() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        My <span className="text-orange-500">Specializations</span>
      </h2>

      <div className="flex max-w-xl flex-col gap-3">
        {specs.map(({ title, text, Icon }) => (
          <article
            key={title}
            className="relative rounded border border-orange-700 p-3"
          >
            <Icon className="absolute right-3 top-3 text-orange-500" />
            <h3 className="text-xs font-semibold">{title}</h3>
            <p className="mt-1 max-w-sm text-[10px] leading-relaxed text-neutral-400">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}