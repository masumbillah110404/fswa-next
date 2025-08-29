export default function HeroCards() {
  return (
    <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-8">
      {/* President */}
      <div className="flex bg-gray-100 p-6 rounded-lg shadow-md">
        <img
          src="/president.webp"
          alt="President"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold text-[#7317cf]">President’s Message</h3>
          <p className="mt-2 text-gray-500">
            Welcome to our association! We are committed to guiding our students
            and strengthening unity across the community.
          </p>
        </div>
      </div>

      {/* General Secretary */}
      <div className="flex bg-gray-100 p-6 rounded-lg shadow-md">
        <img
          src="/gs.jpg"
          alt="General Secretary"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold text-[#7317cf]">General Secretary’s Message</h3>
          <p className="mt-2 text-gray-500">
            Together we work to foster growth, cooperation, and success among all
            members of our welfare family.
          </p>
        </div>
      </div>
    </section>
  );
}
