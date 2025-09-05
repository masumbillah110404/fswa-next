import Contacts from "./components/Contacts";
import HeroCards from "./components/HeroCards";
import Stats from "./components/Stats";
import GalleryContainer from "./components/GalleryContainer";
export default function HomePage() {
    return (
        <div>
            {/* Banner */}
            <section
                className="flex flex-col items-center justify-center text-center  bg-cover bg-center px-6 min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]"
                style={{
                    backgroundImage: "url('/banner.jpg')",
                    backgroundColor: `rgba(0,0,0,0.6)`,
                    backgroundBlendMode: "darken",
                }}
            >
                <h1 className="text-3xl md:text-4xl mb-4 lg:text-5xl b-4 text-white font-bold">
                    Welcome to Feni Students Welfare Association
                </h1>
                <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl">
                    Connecting students from Feni studying at Jagannath
                    University, Dhaka. Join us to foster community, support, and
                    growth.
                </p>
            </section>

            {/* Hero Cards */}
        <HeroCards />

        <GalleryContainer />

            {/* Stats */}
            <Stats />

            {/* About Us (from original design) */}
            <section className="">
                <section className="lg:max-w-screen-xl px-2 md:px-6 lg:px-0 mx-auto  py-12 md:py-16 lg:py-20">
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
