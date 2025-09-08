import Contacts from "./components/Contacts";
import HeroCards from "./components/HeroCards";
import Stats from "./components/Stats";
import GalleryContainer from "./components/GalleryContainer";
import StatsWrapper from "./components/StatsWrapper";
import FeaturedEvents from "./components/FeaturedEvents";
import Image from "next/image";

export default function HomePage() {
    return (
        <div>
            {/* Banner */}
            <section className="pt-16   bg-neutral-200">
                <div className="max-w-screen-xl mx-auto flex lg:items-start px-2 relative">
                    {/* Left Content */}
                    <div className="w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] flex-1 flex flex-col items-start justify-center text-start z-30 px-6 md:px-24">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white lg:text-black leading-relaxed lg:leading-snug ">
                            Welcome to<br />
                            <span className="bg-primary px-2 py-1 text-white rounded-md">
                                Feni Students Welfare
                            </span>{" "}
                            Association, JnU
                        </h1>

                        <p className="mt-4 text-white lg:text-black text-sm md:text-base lg:text-lg font-semibold max-w-2xl">
                            Connecting students from Feni studying at Jagannath
                            University, Dhaka. Join us to foster community,
                            support, and growth.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 hidden lg:block ">
                        <Image
                            src="/banner.jpg"
                            alt="Banner Image"
                            width={800}
                            height={600}
                            className="w-full lg:h-80 object-cover rounded-b-xl shadow-md"
                        />
                    </div>

                    {/* Right Image */}
                    <div className="absolute h-full w-full left-0 top-0 lg:hidden ">
                        <Image
                            src="/banner.jpg"
                            alt="Banner Image"
                            width={800}
                            height={600}
                            className=" w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                </div>
            </section>

            {/* Hero Cards */}
            <HeroCards />

            <GalleryContainer />

            {/* Stats */}
            <Stats />
            <FeaturedEvents />

            {/* About Us (from original design) */}

            <section className="flex gap-10 lg:gap-20 flex-col-reverse md:flex-row justify-center lg:max-w-screen-xl px-2 md:px-6 lg:px-0 mx-auto  py-12 md:py-16 lg:py-20">
                <div
                    className="w-full md:w-1/2 h-80 lg:h-96 rounded-xl imageClipPath bg-cover bg-center bg-black"
                    style={{
                        backgroundImage: "url('/aboutUsImg.jpg')",
                        backgroundColor: `rgba(0,0,0,0.3)`,
                        backgroundBlendMode: "darken",
                    }}
                ></div>
                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        About Us
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        The Feni Students Welfare Association at Jagannath
                        University, Dhaka, is a vibrant community dedicated to
                        supporting students from the Feni district. We organize
                        events, provide resources, and create a platform for
                        networking and collaboration. Our goal is to enhance the
                        university experience and prepare students for future
                        success.
                    </p>
                </section>
            </section>

            <Contacts />
        </div>
    );
}
