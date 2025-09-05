import Image from "next/image";

export default function HeroCards() {
  return (
    <section className="px-2 lg:max-w-screen-xl mx-auto md:px-12 lg:px-0 py-12 md:py-14 lg:py-16 grid md:grid-cols-2 gap-8">
      {/* President */}
      <div className="flex flex-col lg:flex-row lg:gap-4 w-full bg-gray-100 p-2 md:p-4 rounded-lg shadow-md">
        <Image
          src="/president.webp"
          alt="President"
          height={400}
          width={400}
          className="w-full rounded-lg object-cover"
        />
        <div className="mt-4">
          <h3 className="text-xl lg:text-2xl font-bold text-primary">President’s Message</h3>
          <p className="mt-2 text-gray-500">
            Welcome to our association! We are committed to guiding our students
            and strengthening unity across the community.
          </p>
        </div>
      </div>

      {/* General Secretary */}
      <div className="flex flex-col lg:flex-row lg:gap-4 w-full bg-gray-100 p-2 md:p-4 rounded-lg shadow-md">
        <Image
          src="/gs.jpg"
          alt="General Secretary"
          height={400}
          width={400}
          className="w-full rounded-lg object-cover"
        />
        <div className="mt-4">
          <h3 className="text-xl lg:text-2xl font-bold text-primary">General Secretary’s Message</h3>
          <p className="mt-2 text-gray-500">
            Together we work to foster growth, cooperation, and success among all
            members of our welfare family.
          </p>
        </div>
      </div>
    </section>
  );
}
