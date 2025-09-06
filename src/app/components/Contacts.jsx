import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
    return (
        <section className="bg-neutral-100">
            <section className="  max-w-screen-xl mx-auto py-12 md:py-16  px-2 md:px-6 lg:px-0 flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
            <section className=" flex-1 ">
                <h2 className="text-3xl md:text-4xl  font-bold text-primary">
                    Contact Us
                </h2>

                <section className="mt-6 md:mt-8 grid  gap-2">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center">
                            <MdOutlineEmail className="text-secondary text-4xl md:text-5xl mr-2" />
                            <p className="text-gray-600 font-bold">
                                info@fswa.com
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center">
                            <FaPhoneAlt className="text-secondary mr-2 text-4xl md:text-5xl" />
                            <p className="text-gray-600 font-bold">
                                (123) 456-7890
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center">
                            <FaWhatsapp className="text-secondary mr-2 text-4xl md:text-5xl" />
                            <p className="text-gray-600 font-semibold">
                                (123) 456-7890
                            </p>
                        </div>
                    </div>
                </section>
            </section>

            <div className="w-full flex-1">
                <Image className="max-w-96 lg:max-w-min" src="/contact.png" alt="Contact Us" layout="responsive" width={700} height={475} />
            </div>
        </section>
        </section>
    );
};

export default Contacts;
