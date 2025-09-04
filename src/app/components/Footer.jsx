// components/Footer.jsx
"use client";
import React from "react";
import { DataProviderContext } from "../Provider/Provider";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const { highlightColor } = React.useContext(DataProviderContext);
  return (
    <footer className="bg-[#141118] text-gray-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className={`bg-[#7317cf] hover:opacity-80 cursor-pointer px-4 py-2 rounded-lg font-medium`}
              >
                Send
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-5">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-blue-500" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-sky-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-500" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-blue-400" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm">
            <p>© {new Date().getFullYear()} FSWA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
