"use client";
import React from 'react';
import { DataProviderContext } from '../Provider/Provider';

const AboutUs = () => {
  const { highlightColor } = React.useContext(DataProviderContext);

  return (
    <section className={`bg-gray-100 p-6 md:p-16 text-${highlightColor} space-y-12`}>
      
      {/* About Us */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: highlightColor }}>
          About Us
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-base md:text-lg text-black leading-relaxed text-justify">
            The Feni Students Welfare Association (FSWA) is a non-profit organization dedicated to supporting the educational and welfare needs of students from the Feni region. Founded in 2010, FSWA has been instrumental in providing scholarships, educational resources, and mentorship programs to deserving students, helping them achieve their academic and professional aspirations.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: highlightColor }}>
          Our Mission
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-base md:text-lg text-black leading-relaxed text-justify">
            To empower students from the Feni region by providing them with the necessary resources and support to excel in their educational pursuits and contribute meaningfully to society.
          </p>
        </div>
      </div>

      {/* Our Vision */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: highlightColor }}>
          Our Vision
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-base md:text-lg text-black leading-relaxed text-justify">
            To create a community of educated and empowered individuals from Feni who are leaders in their respective fields and contribute to the socio-economic development of the region.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: highlightColor }}>
          Our Values
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {['Integrity', 'Transparency', 'Accountability', 'Community', 'Empowerment', 'Excellence'].map((value) => (
              <div key={value} className="rounded-lg p-4" style={{ backgroundColor: '#7317cf20' }}>
                <span className="font-semibold" style={{ color: highlightColor }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Objectives */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 " style={{ color: highlightColor }}>
          Our Objectives
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <ul className="list-disc list-inside space-y-3 text-black">
            <li>Provide scholarships and financial aid to deserving students.</li>
            <li>Offer mentorship and career guidance programs.</li>
            <li>Organize workshops and seminars to enhance students' skills.</li>
            <li>Foster a sense of community and collaboration among students.</li>
            <li>Promote social responsibility and community service.</li>
          </ul>
        </div>
      </div>

      {/* Our Achievements */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: highlightColor }}>
          Our Achievements
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-base md:text-lg text-black leading-relaxed text-justify">
            Since its inception, FSWA has awarded over 500 scholarships, supported numerous educational initiatives, and organized various successful events. Our alumni have gone on to achieve great success in diverse fields, contributing significantly to their communities.
          </p>
        </div>
      </div>

      {/* Future Goals */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: highlightColor }}>
          Future Goals
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 ">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
            In the coming years, FSWA aims to expand its reach, increase the number of scholarships awarded, and develop new programs to address the evolving needs of students. We are committed to building a stronger, more supportive community for Feni students.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: highlightColor }}>
          Contact Information
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <p className="font-semibold text-black">Mobile</p>
              <p className="text-black">+1-555-123-4567</p>
            </div>
            <div>
              <p className="font-semibold text-black">Email</p>
              <p className="text-black">contact@fswa.org</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
