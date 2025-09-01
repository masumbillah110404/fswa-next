"use client";
import React from "react";

const Transportation = () => {
  const busRoutes = [
    "Dhaka → Feni via Sadarghat Express",
    "Dhaka → Feni via Green Line Paribahan",
    "Dhaka → Feni via Hanif Paribahan",
  ];

  const railwayRoutes = [
    "Dhaka → Feni via Chattogram Intercity (Train 1)",
    "Dhaka → Feni via Chattogram Intercity (Train 2)",
    "Dhaka → Feni via Maitree Express (limited service)",
  ];

  const highlightColor = "#7317cf";

  return (
    <section className="bg-gray-100 p-6 md:p-16">

      {/* Page Title */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-6 text-left"
        style={{ color: highlightColor }}
      >
        Transportation
      </h1>

      {/* GPS Direction / Google Maps */}
      <div className="mb-12">
        <h2
          className="text-xl md:text-3xl font-bold mb-4"
          style={{ color: highlightColor }}
        >
          GPS Direction
        </h2>
        <div className="w-full h-96 md:h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Feni Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4262840587176!2d91.39827031500095!3d23.01517588494795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753d6e4f94d64d7%3A0x2d7f857d73c8d4f3!2sFeni%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693552730745!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bus Routes */}
      <div className="mb-12">
        <h2
          className="text-xl md:text-3xl font-bold mb-4"
          style={{ color: highlightColor }}
        >
          Bus Routes from Dhaka to Feni
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {busRoutes.map((route, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Railway Routes */}
      <div className="mb-12">
        <h2
          className="text-xl md:text-3xl font-bold mb-4"
          style={{ color: highlightColor }}
        >
          Railway Routes from Dhaka to Feni
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {railwayRoutes.map((route, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              {route}
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default Transportation;
