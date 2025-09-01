"use client";
import React from "react";
import Image from "next/image";

const HistoryOfFeni = () => {
  const historicalPlaces = [
    {
      img: "/mosque.jpg",
      title: "Rajajhi Mosque",
      desc: "A historic mosque showcasing Mughal-era architecture.",
    },
    {
      img: "/mosque.jpg",
      title: "Parshuram Zamindar Bari",
      desc: "An old zamindar palace rich in cultural heritage.",
    },
    {
      img: "/mosque.jpg",
      title: "Feni River",
      desc: "One of the main rivers shaping Feni’s history.",
    },
  ];

  const visitablePlaces = [
    {
      img: "/mosque.jpg",
      title: "Shaheed Minar",
      desc: "A monument honoring martyrs of the language movement.",
    },
    {
      img: "/mosque.jpg",
      title: "Bijoy Singh Dighi",
      desc: "A large pond and historical site in Feni town.",
    },
    {
      img: "/mosque.jpg",
      title: "Feni Eco Park",
      desc: "A beautiful spot for recreation and nature lovers.",
    },
  ];

  const famousPeople = [
    {
      img: "/mosque.jpg",
      title: "Sir A. K. Fazlul Huq",
      desc: "Prominent politician and statesman from Feni.",
    },
    {
      img: "/mosque.jpg",
      title: "Shah Abdul Karim",
      desc: "Folk musician whose works influenced generations.",
    },
    {
      img: "/mosque.jpg",
      title: "Fazle Hasan Abed",
      desc: "Founder of BRAC, a global development organization.",
    },
  ];

  return (
    <section className="bg-gray-100 p-6 md:p-16">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left" style={{ color: "#7317cf" }}>
        History of Feni
      </h1>
      <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl">
        Feni is a district located in southeastern Bangladesh, known for its rich cultural
        heritage, historic landmarks, and contributions to education and politics. The city
        continues to play a significant role in the nation’s history and development.
      </p>

      {/* Historical Places */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#7317cf" }}>
          Historical Places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {historicalPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image src={place.img} alt={place.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{place.title}</h3>
                <p className="text-sm text-gray-600">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visitable Places */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#7317cf" }}>
          Visitable Places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visitablePlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image src={place.img} alt={place.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{place.title}</h3>
                <p className="text-sm text-gray-600">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* People Who Made History */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#7317cf" }}>
          People Who Made History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {famousPeople.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col items-center text-center p-6"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={person.img}
                  alt={person.title}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{person.title}</h3>
              <p className="text-sm text-gray-600">{person.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HistoryOfFeni;
