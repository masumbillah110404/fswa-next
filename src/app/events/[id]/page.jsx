"use client";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import { DataProviderContext } from "../../Provider/Provider";

export default function EventDetailsPage({ params }) {

  const { id: eventId } = React.use(params);

  const { events } = React.useContext(DataProviderContext);
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 flex justify-center items-center">
      <div
        className="
          flex flex-col 
          bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden
          w-full max-w-4xl
        "
      >
        {/* Image */}
        <div className="relative w-full h-72 md:h-[400px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <div className="p-4">

            <h1 className="sm:text-5xl text-2xl font-bold text-[var(--color-primary)] leading-snug text-left">
              {event.title}
            </h1>
            <div className="mt-4 text-gray-700 text-lg text-justify">
              {event.details}
            </div>
          </div>
            <div className="text-left bg-[var(--color-primary)] text-sm w-[max-content]  text-white py-1 px-4 mt-4 sm:mt-8 rounded-tr-xl">
              {event.time}
            </div>
        </div>
      </div>
    </section>
  );
}
