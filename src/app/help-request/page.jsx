"use client";
import { useForm } from "react-hook-form";

const HelpRequestPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const formUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLSck4pU2bRD7QYFE5PGak9vO3_TC6SoZ4J3IEkcFjpuSXbrGyA/formResponse";

        const formData = new FormData();
        formData.append("entry.655828008", data.name);
        formData.append("entry.1295355998", data.phone);
        formData.append("entry.1861503466", data.batch);
        formData.append("entry.1739777277", data.department);
        formData.append("entry.850660489", data.problemType);
        formData.append("entry.1368444128", data.problemDescription);
        formData.append("entry.848234296", data.urgencyLevel);

        await fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        alert("Your response has been submitted!");
    };
    return (
        <section>
            <section
                className="flex flex-col items-center justify-center text-center  bg-cover bg-center px-6 min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]"
                style={{
                    backgroundImage: "url('/help.jpg')",
                    backgroundColor: `rgba(0,0,0,0.6)`,
                    backgroundBlendMode: "darken",
                }}
            >
                <h1 className="text-3xl md:text-4xl mb-4 lg:text-5xl b-4 text-white font-bold">
                    Help & Support Request
                </h1>
                <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl">
                    Share your problem or concern with us. Whether it’s
                    financial, academic, medical, or any other issue . Fill out
                    the form below and we’ll reach out to help you.
                </p>
            </section>

            <section className="py-10 md:py-16 px-6">
                <h1 className="text-2xl font-bold mb-6 md:mb-8 text-primary text-center md:text-3xl lg:text-4xl">
                    Reach Out for Support
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-2xl text-black  mx-auto p-6 space-y-4 bg-neutral-100 rounded-xl shadow"
                >
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Full Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="w-full border p-2 rounded text-xs md:text-base"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-xs ">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Phone
                        </label>
                        <input
                            {...register("phone", {
                                required: "Phone is required",
                            })}
                            className="w-full border p-2 rounded text-xs md:text-base"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-xs">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    {/* Batch */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Batch
                        </label>
                        <input
                            {...register("batch", {
                                required: "Batch is required",
                            })}
                            className="w-full border p-2 rounded text-xs md:text-base"
                        />
                        {errors.batch && (
                            <span className="text-red-500 text-xs">
                                {errors.batch.message}
                            </span>
                        )}
                    </div>

                    {/* Department */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Department
                        </label>
                        <input
                            {...register("department", {
                                required: "Department is required",
                            })}
                            className="w-full border p-2 rounded text-xs md:text-base"
                        />
                        {errors.department && (
                            <span className="text-red-500 text-xs">
                                {errors.department.message}
                            </span>
                        )}
                    </div>

                    {/* Problem Type */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Problem Type
                        </label>
                        <select
                            {...register("problemType", {
                                required: "Select a problem type",
                            })}
                            className="w-full border p-2 rounded text-xs md:text-base"
                        >
                            <option value="">-- Select --</option>
                            <option value="Financial">Financial</option>
                            <option value="Academic">Academic</option>
                            <option value="Medical">Medical</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.problemType && (
                            <span className="text-red-500 text-xs">
                                {errors.problemType.message}
                            </span>
                        )}
                    </div>

                    {/* Problem Description */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Problem Description
                        </label>
                        <textarea
                            {...register("problemDescription", {
                                required: "Description is required",
                            })}
                            rows={4}
                            className="w-full border p-2 rounded text-xs md:text-base"
                        />
                        {errors.problemDescription && (
                            <span className="text-red-500 text-xs">
                                {errors.problemDescription.message}
                            </span>
                        )}
                    </div>

                    {/* Urgency Level */}
                    <div>
                        <label className="block mb-1 font-medium text-xs md:text-base">
                            Urgency Level
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-xs md:text-base">
                                <input
                                    type="radio"
                                    value="Urgent"
                                    {...register("urgencyLevel", {
                                        required: "Select urgency level",
                                    })}
                                />
                                Urgent
                            </label>
                            <label className="flex items-center gap-2 text-xs md:text-base">
                                <input
                                    type="radio"
                                    value="Normal"
                                    {...register("urgencyLevel", {
                                        required: "Select urgency level",
                                    })}
                                />
                                Normal
                            </label>
                        </div>
                        {errors.urgencyLevel && (
                            <span className="text-red-500 text-xs">
                                {errors.urgencyLevel.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition duration-1000"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </section>
    );
};

export default HelpRequestPage;
