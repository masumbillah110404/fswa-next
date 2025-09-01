import Hero from "./Hero";

const heroes = [
  {
    id: 1,
    image: "/president.webp",
    alt: "President",
    title: "President’s Message",
    message: "Welcome to our association! We are committed to guiding our students and strengthening unity across the community."
  },
  {
    id: 2,
    image: "/gs.jpg",
    alt: "General Secretary",
    title: "General Secretary’s Message",
    message: "Together we work to foster growth, cooperation, and success among all members of our welfare family."
  }
];

export default function HeroCards() {
  return (
    <section className="px-6 md:px-20 py-12 grid gap-8">
      {heroes.map(hero => (
        <Hero
          key={hero.id}
          image={hero.image}
          alt={hero.alt}
          title={hero.title}
          message={hero.message}
        />
      ))}
    </section>
  );
}
