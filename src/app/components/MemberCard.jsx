import Image from "next/image";

export default function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 sm:w-48">
      <div className="relative w-24 h-24 mb-3">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-full"
          sizes="96px"
        />
      </div>
      <div className="text-lg font-bold text-[#7317cf]">{member.name}</div>
      <div className="text-gray-500 text-sm mt-1">{member.dept}</div>
    </div>
  );
}
