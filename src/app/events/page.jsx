"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { DataProviderContext } from "../Provider/Provider";

export default function EventsPage() {
  const { events } = useContext(DataProviderContext);

  return (
    <div>
      {/* Banner */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[400px] px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/events.jpg')",
          }}
        />

        {/* Diagonal overlay with primary color and black */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/80 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10">
        <h1
          className="sm:text-5xl text-4xl md:text-6xl font-extrabold text-white"
          style={{
            textShadow: "2px 2px 4px var(--color-primary)",
          }}
        >
          Events & News
        </h1>
      </div>

      </section>

      {/* Events & News Cards */}
      <section className="px-6 md:px-20 py-12 flex flex-col gap-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row bg-white rounded-lg items-start sm:items-center sm:p-6 shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            {/* Image */}
            <div className="relative w-full sm:w-40 aspect-[4/3] sm:aspect-square flex-shrink-0 rounded-[0.25rem] overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex w-full flex-col justify-between flex-1 pt-4 sm:pt-0 sm:pl-6">
              <div className="px-2">
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">{event.title}</h2>
                <p className="text-gray-500 mt-2 text-justify">
                  {event.description}{" "}
                  <Link
                    href={`/events/${event.id}`}
                    className="text-[var(--color-secondary)] opacity-90 underline ml-1"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="text-left bg-[var(--color-primary)] text-sm sm:w-[max-content] w-full text-white rounded-none sm:rounded py-1 px-2 mt-4">
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
