import data from "../../assets/data/busSchedules.json";

const page = () => {
    const { routes } = data;
    return (
        <section>
            <section
                className="flex flex-col items-center justify-center text-center  bg-cover bg-center px-6 min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]"
                style={{
                    backgroundImage: "url('/jnubus.jpg')",
                    backgroundColor: `rgba(0,0,0,0.6)`,
                    backgroundBlendMode: "darken",
                }}
            >
                <h1 className="text-3xl md:text-4xl mb-4 lg:text-5xl b-4 text-white font-bold">
                    JnU Student Transport Routes
                </h1>
                <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl">
                    Explore all JnU student transport routes in one place. Find
                    detailed stops and directions to make your daily university
                    travel easier and faster.
                </p>
            </section>

            <section className="max-w-screen-xl mx-auto py-10 md:py-14 lg:py-16">
                <h1 className="text-2xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 text-center">
                    জবি শিক্ষার্থীদের পরিবহন রুটসমূহ
                </h1>

                <section className="grid grid-cols-1  gap-2 md:gap-4 px-2 md:px-6 lg:px-0">
                    {routes.map((route, idx=route.id) => (
                        <div
                            key={idx}
                            className="p-5 rounded-lg shadow bg-neutral-100 border border-gray-100 hover:shadow-lg transition "
                        >
                            <div className="text-xl flex text-start font-semibold text-primary mb-3">
                                <h2>{idx+1} .</h2>
                                <h3>{route.name}</h3>
                            </div>
                            <ul className="flex flex-wrap  items-center gap-1 text-white text-sm leading-relaxed space-y-1 ">
                                {route.stops.map((stop, stopIdx) => (
                                    <li className={`bg-neutral-200 text-black p-1 px-4 rounded-lg ` } key={stopIdx}>{stop}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default page;
