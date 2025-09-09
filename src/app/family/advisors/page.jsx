"use client";
import React, { useContext, useState, useMemo } from "react";
import { DataProviderContext } from "../../Provider/Provider";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { FaPhone, FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

export default function AdvisorsPage() {
  const { advisorsList } = useContext(DataProviderContext);

  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const offset = currentPage * itemsPerPage;

  // Filter advisors based on search query
  const filteredAdvisors = useMemo(() => {
    return advisorsList.filter((a) => {
      const q = searchQuery.toLowerCase();
      return (
        a.name.toLowerCase().includes(q) ||
        a.dept.toLowerCase().includes(q) ||
        (a.session && a.session.toLowerCase().includes(q)) ||
        (a.upazilla && a.upazilla.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, advisorsList]);

  const pageCount = Math.ceil(filteredAdvisors.length / itemsPerPage);
  const currentItems = filteredAdvisors.slice(offset, offset + itemsPerPage);

  // Smooth scroll to top
  const scrollToTop = () => {
    const section = document.getElementById("advisors-section");
    if (!section) return;

    const start = window.scrollY;
    const end = section.offsetTop;
    const duration = 500;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + (end - start) * ease);

      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    scrollToTop();
  };

  const copyToClipboard = (phone) => {
    navigator.clipboard.writeText(phone);
    alert(`Copied phone: ${phone}`);
  };

  return (
    <section
      id="advisors-section"
      className="min-h-screen px-4 sm:px-6 py-10 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title & Search */}
        <div className="w-full flex flex-col md:items-start items-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-2 text-center md:text-left">
            Our Advisors
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-4 text-center md:text-left">
            Meet our trusted advisors guiding our family across departments and sessions.
          </p>
          <div className="flex w-full items-center border border-gray-300 rounded-md px-3 py-2 max-w-sm">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by name, dept, session or upazila..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {currentItems.map((advisor, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden w-64 sm:w-72 border border-[var(--color-primary)] hover:border-[var(--color-secondary)] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-44 sm:h-52 relative overflow-hidden">
                <Image
                  src={advisor.image ? advisor.image : "/default-avatar.jpg"}
                  alt={advisor.name}
                  fill
                  unoptimized
                  sizes="100%"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="py-3 px-4 text-center w-full">
                <h3 className="font-semibold text-base sm:text-lg text-black mb-1">
                  {advisor.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">Dept: {advisor.dept}</p>
                {advisor.session && (
                  <p className="text-xs sm:text-sm text-gray-600">Session: {advisor.session}</p>
                )}
                {advisor.upazilla && (
                  <p className="text-xs sm:text-sm text-gray-600">Upazila: {advisor.upazilla}</p>
                )}
                {advisor.phone && (
                  <div className="mt-3 flex justify-center">
                    <button
                      onClick={() => copyToClipboard(advisor.phone)}
                      className="flex items-center gap-2 text-xs sm:text-sm bg-[var(--color-primary)] text-white px-4 py-1 rounded-md hover:bg-[var(--color-secondary)] transition cursor-pointer"
                    >
                      <FaPhone size={14} />
                      {advisor.phone}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-10">
            <ReactPaginate
              previousLabel={<FaArrowLeft />}
              nextLabel={<FaArrowRight />}
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="flex gap-2 text-sm sm:text-base items-center cursor-pointer"
              pageClassName="px-3 py-1 border rounded-md hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer flex justify-center items-center"
              activeClassName="bg-[var(--color-primary)] text-white"
              previousClassName="px-3 py-1 border rounded-md hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer flex items-center justify-center"
              nextClassName="px-3 py-1 border rounded-md hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer flex items-center justify-center"
            />
          </div>
        )}
      </div>
    </section>
  );
}
