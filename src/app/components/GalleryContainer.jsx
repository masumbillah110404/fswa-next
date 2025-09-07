import Image from "next/image";
import image1 from "../../assets/gallery/image1.jpg"
import image2 from "../../assets/gallery/image2.jpg"
import Link from "next/link";


const GalleryContainer = () => {
    return (
        <section className="max-w-screen-xl mx-auto flex flex-col gap-4 md:flex-row px-2 md:px-8 lg:px-0 py-8 mb-6 lg:gap-12">
            
            <div className="flex-1 px-4 flex flex-col gap-2 lg:justify-center">
                <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold">Building Bonds, Creating Memories, Inspiring Student Success</h1>
                <p className="text-gray-600">We are a Student Welfare Association committed to uniting students, fostering friendships, supporting growth, and creating lasting memories through events and programs.</p>
                <Link href="/events" className="p-2 px-4 w-36 mt-2 rounded-lg transition hover:scale-95 duration-700 bg-secondary ">Explore Events</Link>
            </div>
            <section className="grid grid-cols-3 gap-1 flex-1 ">
                <div className="shadow-lg "> <Image src={image1} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/> </div>
                <div className="shadow-lg row-span-2"><Image src={image2} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg"><Image src={image1} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg row-span-2"><Image src={image2} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg "><Image src={image2} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg "><Image src={image2} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg row-span-2"><Image src={image1} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg"><Image src={image2} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
                <div className="shadow-lg"><Image src={image1} alt="" height={100} width={100} className="w-full h-full object-cover rounded-md"/></div>
            </section>
        </section>
    );
};

export default GalleryContainer;