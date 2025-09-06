"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);

  return (
    <header className=" sticky top-0 left-0 flex items-center justify-between border-b border-secondary px-6 md:px-10  z-50 bg-secondary text-white h-16">
      {/* Logo */}
      <div className="flex items-center gap-2 h-full">
        <Link href="/" className="flex items-center h-full">
          <Image
            className="rounded-full"
            alt="logo"
            width={28}
            height={28}
            src="/logo.jpg"
          />
        </Link>
        <h2 className="font-bold text-lg text-white">FSWA</h2>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-4 h-full items-center">
        <Link
          href="/"
          className="flex items-center h-full px-4 transition-colors hover:bg-[var(--color-primary)]"
        >
          Home
        </Link>

        {/* Family Dropdown */}
        <div className="relative h-full">
          <button
            onClick={() => setMembersOpen(!membersOpen)}
            className="flex items-center h-full px-4 gap-1 transition-colors hover:bg-[var(--color-primary)]"
          >
            Our Family{" "}
            <ChevronDown
              size={16}
              className={`${membersOpen ? "rotate-180" : "rotate-0"} transition-transform`}
            />
          </button>

          {membersOpen && (
            <div className="absolute top-full mt-0 bg-black text-white rounded-md shadow-lg w-48 flex flex-col">
              <Link
                href="/family/members"
                className="px-4 py-2 transition-colors hover:bg-[var(--color-primary)]"
                onClick={() => setMembersOpen(false)}
              >
                Members
              </Link>
              <Link
                href="/family/executiveMembers"
                className="px-4 py-2 transition-colors hover:bg-[var(--color-primary)]"
                onClick={() => setMembersOpen(false)}
              >
                Executive Members
              </Link>
              <Link
                href="/family/advisors"
                className="px-4 py-2 transition-colors hover:bg-[var(--color-primary)]"
                onClick={() => setMembersOpen(false)}
              >
                Advisors
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/events"
          className="flex items-center h-full px-4 transition-colors hover:bg-[var(--color-primary)]"
        >
          Events & News
        </Link>
        <Link
          href="/transportation"
          className="flex items-center h-full px-4 transition-colors hover:bg-[var(--color-primary)]"
        >
          Transportation
        </Link>
        <Link
          href="/about"
          className="flex items-center h-full px-4 transition-colors hover:bg-[var(--color-primary)]"
        >
          About Us
        </Link>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute top-full right-0 bg-black shadow-lg w-48 flex flex-col md:hidden rounded-b-md mr-6 overflow-hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
          >
            Home
          </Link>

          {/* Family Dropdown in Mobile */}
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setMembersOpen(!membersOpen)}
              className="flex justify-between items-center px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
            >
              Our Family{" "}
              <ChevronDown
                size={16}
                className={`${membersOpen ? "rotate-180" : "rotate-0"} transition-transform`}
              />
            </button>
            {membersOpen && (
              <div className="flex flex-col gap-1 bg-black">
                <Link
                  href="/family/members"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
                >
                  Members
                </Link>
                <Link
                  href="/family/executiveMembers"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
                >
                  Executive Members
                </Link>
                <Link
                  href="/family/advisors"
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
                >
                  Advisors
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
          >
            Events & News
          </Link>
          <Link
            href="/transportation"
            onClick={() => setOpen(false)}
            className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
          >
            Transportation
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="px-2 py-2 transition-colors hover:bg-[var(--color-primary)]"
          >
            About Us
          </Link>
        </div>
      )}
    </header>
  );
}
