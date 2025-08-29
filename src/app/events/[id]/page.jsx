import { notFound } from "next/navigation";
import { events } from "../page";

export default function EventDetailsPage({ params }) {
  const eventId = Number(params.id);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <section className="h-screen px-6 md:px-20 py-16 flex justify-center items-center">
      <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-md overflow-hidden max-w-4xl w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full md:w-96 h-96 object-cover"
        />
        <div className="flex flex-col justify-center flex-1 md:p-10 pt-10">
          <h1 className="text-4xl font-bold text-[#7317cf] mb-6">{event.title}</h1>
          <div className="text-gray-700 whitespace-pre-line text-lg text-justify">{event.details}</div>
          <div className="text-right text-sm text-gray-400 mt-8">
            {event.time}
          </div>
        </div>
      </div>
    </section>
  );
}