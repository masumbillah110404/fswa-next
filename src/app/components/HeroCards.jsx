"use client";

import { useContext } from "react";
import Hero from "./Hero";
import { DataProviderContext } from "../Provider/Provider";

export default function HeroCards() {
  const { messages } = useContext(DataProviderContext);

  return (
    <section className="px-6 md:px-20 py-12 grid gap-8">
      {messages.map(hero => (
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
