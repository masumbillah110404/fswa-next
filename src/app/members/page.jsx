"use client";
import MemberCard from "../components/MemberCard";
import { useContext } from "react";
import { DataProviderContext } from "../Provider/Provider";

export default function MembersPage() {
  const { members, executiveMembers, advisorsList } = useContext(DataProviderContext);

  const renderSection = (title, data) => (
    <section className="px-6 md:px-20 py-12 text-center sm:text-left">
      <h2 className="text-2xl font-bold text-[#7317cf] mb-6">{title}</h2>
      {/* Grid for small screens, flex-row for large screens */}
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row md:flex-wrap md:gap-8">
        {data.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );

  return (
    <div>
      {/* Banner */}
      <section
        className="flex flex-col items-center justify-center text-center min-h-[300px] bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/members.jpg')",
          backgroundColor: `rgba(0,0,0,0.4)`,
          backgroundBlendMode: "darken"
        }}
      >
        <h1 className="text-4xl mb-4 md:text-5xl text-white font-bold">
          Our Members
        </h1>
        <p className="text-gray-200 max-w-2xl">
          Meet the dedicated members, executive committee, and advisors of Feni Students Welfare Association.
        </p>
      </section>

      {renderSection("Members", members)}
      {renderSection("Executive Members", executiveMembers)}
      {renderSection("Advisors", advisorsList)}
    </div>
  );
}
