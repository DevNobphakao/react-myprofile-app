const projects = [
  {
    title: "Manage Task App - fullstack web development",
    text: "Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end. Watch the video to see the responsive landing page in action.",
    image: "../public/project1.png",
    
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        Featured <span className="text-orange-500">Projects</span>
      </h2>

      {projects.map(({ title, text, image, link }) => (
        <article key={title} className="flex max-w-xl flex-col gap-2">
          <h3 className="text-xs font-semibold">{title}</h3>
          <p className="text-[10px] leading-relaxed text-neutral-400">{text}</p>

          <img
            src={image}
            alt={title}
            className="mt-2 w-full max-w-sm rounded border border-neutral-700 bg-neutral-800"
          />

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] text-orange-500 hover:underline"
            >
              View project
            </a>
          )}
        </article>
      ))}
    </section>
  );
}