export default function AboutMe() {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm">
        About <span className="text-orange-500">Me</span>
      </h2>

      <p className="max-w-xl text-2xl font-semibold leading-snug">
        I find fulfillment in blending visual design with the power of coding
        to create meaningful experiences.
      </p>

      <p className="max-w-xl text-xs leading-relaxed text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora et neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates dolorem.
      </p>
    </section>
  );
}