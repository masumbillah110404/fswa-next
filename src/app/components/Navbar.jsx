"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-[#302938] px-6 md:px-10 py-3 relative z-50 bg-[#141118]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/">
        <Image alt="logo" width={24} height={24} src="/logo.jpg"></Image>
        </Link>
        <h2 className="font-bold text-lg">Feni Students Welfare Association</h2>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8">
        <Link href="/" className="hover:text-[#7317cf]">Home</Link>
        <Link href="/events" className="hover:text-[#7317cf]">Events & News</Link>
        <Link href="/members" className="hover:text-[#7317cf]">Members</Link>
        <Link href="/transportation" className="hover:text-[#7317cf]">Transportation</Link>
        <Link href="/history" className="hover:text-[#7317cf]">History</Link>
        <Link href="/about" className="hover:text-[#7317cf]">About Us</Link>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Drawer */}
      {open && (
        <div className="absolute top-full right-0 bg-[#1e1a24] w-56 shadow-lg p-5 flex flex-col gap-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/events" onClick={() => setOpen(false)}>Events & News</Link>
          <Link href="/members" onClick={() => setOpen(false)}>Members</Link>
          <Link href="/transportation" onClick={() => setOpen(false)}>Transportation</Link>
          <Link href="/history" onClick={() => setOpen(false)}>History</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
        </div>
      )}
    </header>
  );
}
