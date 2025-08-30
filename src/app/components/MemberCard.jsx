export default function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-48">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 object-cover rounded-full mb-3"
      />
      <div className="text-lg font-bold text-[#7317cf]">{member.name}</div>
      <div className="text-gray-500 text-sm mt-1">{member.dept}</div>
    </div>
  );
}