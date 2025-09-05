"use client";
import React from "react";
import { DataProviderContext } from "../Provider/Provider";

export default function Stats() {
    const { students, alumni, advisors } =
        React.useContext(DataProviderContext);

    return (
        <section className="bg-accent lg:mt-12">
            <section className="  text-gray-500 py-14 md:py-20 grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                        {students}+
                    </h2>
                    <p className="mt-2 ">Current Students</p>
                </div>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                        {alumni}+
                    </h2>
                    <p className="mt-2">Alumni</p>
                </div>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                        {advisors}+
                    </h2>
                    <p className="mt-2">Advisors</p>
                </div>
            </section>
        </section>
    );
}
