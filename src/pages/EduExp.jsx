const items = [
  {
    period: "2022 - Present",
    title: "UI/UX Designer",
    place: "Freelance",
    detail: "Fullstack Web Developer",
  },
  {
    period: "2022 - 2025",
    title: "Bachelor Degree in Technology Digital and Innovation",
    place: "Southeast Asia University",
  },
  {
    period: "2016 - 2021",
    title: "High school",
    place: "Tawoethapitsek School",
  },
];

export default function EduExp() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">
        Education &amp; <span className="text-orange-500">Experience</span>
      </h2>

      <ol className="flex flex-col gap-4 border-l border-neutral-700 pl-4">
        {items.map(({ period, title, place, detail }) => (
          <li key={period}>
            <p className="text-[10px] text-orange-500">{period}</p>
            <p className="text-xs font-semibold">{title}</p>
            <p className="text-[10px] text-neutral-400">{place}</p>
            {detail && <p className="text-xs font-semibold">{detail}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}