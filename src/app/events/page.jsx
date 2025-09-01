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
      <section
        className="flex flex-col items-center justify-center text-center min-h-[300px] bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/events.jpg')",
          backgroundColor: `rgba(0,0,0,0.4)`,
          backgroundBlendMode: "darken",
        }}
      >
        <h1 className="text-4xl mb-4 md:text-5xl text-white font-bold">
          Events & News
        </h1>
        <p className="text-gray-200 max-w-2xl">
          Stay updated with the latest events and news from Feni Students Welfare Association.
        </p>
      </section>

      {/* Events & News Cards */}
      <section className="px-6 md:px-20 py-12 flex flex-col gap-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row bg-white rounded-lg items-start sm:items-center p-2 shadow-md overflow-hidden "
          >
            {/* Image */}
            <div className="relative w-full sm:w-32 aspect-[4/3] sm:aspect-square flex-shrink-0 rounded-[0.25rem] overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between flex-1 pt-4 sm:pt-0 sm:pl-6">
              <div>
                <h2 className="text-2xl font-bold text-[#7317cf]">{event.title}</h2>
                <p className="text-gray-500 mt-2 text-justify">
                  {event.description}{" "}
                  <Link
                    href={`/events/${event.id}`}
                    className="text-[#7317cf] opacity-80 underline ml-1"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="text-left text-sm text-gray-400 mt-4">{event.time}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
