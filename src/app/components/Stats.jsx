
"use client";
import React from "react";
import { DataProviderContext } from "../Provider/Provider";

export default function Stats() {

  const {students, alumni, advisors} = React.useContext(DataProviderContext);


  return (
    <section className="px-6 bg-gray-100 text-gray-500 md:px-20 py-12 grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h2 className="text-4xl font-bold text-[#7317cf]">{students}+</h2>
        <p className="mt-2 ">Current Students</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-[#7317cf]">{alumni}+</h2>
        <p className="mt-2">Alumni</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-[#7317cf]">{advisors}+</h2>
        <p className="mt-2">Advisors</p>
      </div>
    </section>
  );
}