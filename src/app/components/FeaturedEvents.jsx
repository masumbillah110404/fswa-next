"use client";
import { useContext } from "react";
import { DataProviderContext } from "../Provider/Provider";
import Link from "next/link";
import Image from "next/image";
const FeaturedEvents = () => {
    const { events } = useContext(DataProviderContext);
    return (
        <div className="max-w-screen-xl mx-auto py-10 md:py-14 lg:py-16 px-2 md:px-6 lg:px-0">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4 lg:mb-8  ">
                Featured Events
            </h1>
            <section className="px-2 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {events.slice(0, 3).map((event) => (
                    <div
                        key={event.id}
                        className="flex flex-col sm:flex-row bg-white rounded-lg items-start sm:items-center  shadow transition hover:shadow-2xl border border-gray-200"
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
                                <h2 className="text-2xl font-bold text-[var(--color-primary)]">
                                    {event.title}
                                </h2>
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

                <div className="h-full flex items-end justify-start">
                    <Link href="/events" className="p-2 px-8 text-white bg-secondary text-sm font-bold rounded-2xl transition hover:scale-95 hover:shadow-lg"> More Events... </Link>
                </div>
            </section>
        </div>
    );
};

export default FeaturedEvents;
