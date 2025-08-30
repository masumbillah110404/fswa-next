import Link from "next/link";

export const events = [
  {
    id: 1,
    title: "Annual Reunion 2025",
    description: "Join us for our annual reunion with alumni and current students.",
    time: "September 15, 2025, 4:00 PM",
    image: "/events.jpg",
    details: `
      The Annual Reunion 2025 brings together alumni and current students for a day of celebration, networking, and fun. 
      Enjoy cultural programs, guest speeches, and a gala dinner. Don't miss this opportunity to reconnect and make new memories!
    `
  },
  {
    id: 2,
    title: "Career Guidance Seminar",
    description: "Get expert advice from industry professionals and alumni.",
    time: "October 10, 2025, 2:00 PM",
    image: "/events.jpg",
    details: `
      This seminar features talks from successful alumni and industry leaders. 
      Learn about career paths, resume building, and interview tips. Q&A session included. Open to all FSWA members.
    `
  },
  {
    id: 3,
    title: "FSWA News: Scholarship Announced",
    description: "New scholarships available for Feni students. Apply now!",
    time: "August 28, 2025",
    image: "/events.jpg",
    details: `
      FSWA is proud to announce new scholarships for deserving students from Feni. 
      Applications are open until September 30. Visit our website for eligibility criteria and application process.
    `
  }
];

export default function EventsPage() {
  return (
    <div>
      {/* Banner */}
      <section
        className="flex flex-col items-center justify-center text-center min-h-[300px] bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/events.jpg')",
          backgroundColor: `rgba(0,0,0,0.4)`,
          backgroundBlendMode: "darken"
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
      <section className="px-6 md:px-20 py-12 space-y-8">
        {events.map(event => (
          <div key={event.id} className="flex bg-white rounded-lg items-center p-2 shadow-md overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-32 h-32 object-cover rounded-[0.25rem]"
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h2 className="text-2xl font-bold text-[#7317cf]">{event.title}</h2>
                <p className="text-gray-500 mt-2">
                  {event.description}{" "}
                  <Link href={`/events/${event.id}`} className="text-[#7317cf] opacity-80 underline ml-1">
                    Read more
                  </Link>
                </p>
              </div>
              <div className="text-left text-sm text-gray-400 mt-4">
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}