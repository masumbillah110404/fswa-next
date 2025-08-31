import Image from "next/image";

export default function Hero({ image, alt, title, message }) {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 p-6 rounded-lg shadow-md">
      {/* Left Column */}
      <div className="flex flex-col w-full items-center sm:w-40 flex-shrink-0">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-lg">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
        
        <h3 className="text-xl font-bold text-[#7317cf] mt-3 sm:hidden">{title}</h3>
      </div>

      {/* Right Column */}
      <div className="flex-1 sm:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#7317cf] hidden sm:block">{title}</h3>
        <p className="text-gray-500 text-justify mt-2">{message}</p>
      </div>
    </div>
  );
}
