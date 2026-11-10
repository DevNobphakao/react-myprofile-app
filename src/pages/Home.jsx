const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
];

export default function Home() {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-sm">
        Lets Work <span className="text-orange-500">Together !</span>
      </p>

      <h1 className="text-2xl font-semibold leading-snug">
        Hi From <span className="text-orange-500">Nobphakao</span>,
        <br />
        Interactive Designer &amp; Fullstack Web Developer
      </h1>

      <p className="max-w-lg text-xs leading-relaxed text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora et neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates dolorem.
      </p>

      <div className="mt-4 flex gap-8">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl text-orange-500">{value}</p>
            <p className="text-[10px] text-neutral-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}