import HeroCards from "./components/HeroCards";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <section
        className="flex flex-col items-center justify-center text-center min-h-[400px] bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundColor: `rgba(0,0,0,0.4)`,
          backgroundBlendMode: "darken"
        }}
      >
        <h1 className="text-4xl mb-4 md:text-5xl b-4 text-white font-bold">
          Welcome to Feni Students Welfare Association
        </h1>
        <p className="text-gray-200 max-w-2xl">
          Connecting students from Feni studying at Jagannath University, Dhaka.
          Join us to foster community, support, and growth.
        </p>
      </section>

      {/* Hero Cards */}
      <HeroCards />

      {/* Stats */}
      <Stats />

      {/* About Us (from original design) */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold text-[#7317cf] mb-4">About Us</h2>
        <p className="text-gray-500 leading-relaxed">
          The Feni Students Welfare Association at Jagannath University, Dhaka,
          is a vibrant community dedicated to supporting students from the Feni
          district. We organize events, provide resources, and create a platform
          for networking and collaboration. Our goal is to enhance the university
          experience and prepare students for future success.
        </p>
      </section>


      {/* footer section */}
      <Footer />
    </div>
  );
}
