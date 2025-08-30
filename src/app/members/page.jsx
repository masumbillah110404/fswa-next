import MemberCard from "../components/MemberCard";


const members = [
  {
    id: 1,
    name: "Sadia Rahman",
    dept: "English",
    image: "/president.webp"
  },
  {
    id: 2,
    name: "Tanvir Ahmed",
    dept: "Physics",
    image: "/president.webp"
  },
  {
    id: 3,
    name: "Rifat Hossain",
    dept: "Law",
    image: "/president.webp"
  }
];

const executiveMembers = [
  {
    id: 1,
    name: "Farhan Islam",
    dept: "Management",
    image: "/president.webp"
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    dept: "Marketing",
    image: "/president.webp"
  }
];

const advisors = [
  {
    id: 1,
    name: "Dr. Mahmudul Hasan",
    dept: "Chemistry",
    image: "/president.webp"
  },
  {
    id: 2,
    name: "Prof. Shamsul Alam",
    dept: "History",
    image: "/president.webp"
  }
];



export default function MembersPage() {
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

      {/* Members Section */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl font-bold text-[#7317cf] mb-6">Members</h2>
        <div className="flex flex-wrap gap-8 justify-start">
          {members.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Executive Members Section */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl font-bold text-[#7317cf] mb-6">Executive Members</h2>
        <div className="flex flex-wrap gap-8">
          {executiveMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl font-bold text-[#7317cf] mb-6">Advisors</h2>
        <div className="flex flex-wrap gap-8">
          {advisors.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}