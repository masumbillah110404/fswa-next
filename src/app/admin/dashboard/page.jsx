'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function AdminDashboard() {
  const router = useRouter();

  const options = [
    { id: 1, key: 'events', label: 'Event' },
    { id: 2, key: 'members', label: 'Member' },
    { id: 3, key: 'executiveMembers', label: 'Executive Member' },
    { id: 4, key: 'advisors', label: 'Advisor' },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = (id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dropdownHeight = 140; // approximate height of dropdown (3 buttons * 40px each)
    const dropdownWidth = 180; // width of dropdown

    // Vertical flip if near bottom
    const top = (rect.bottom + dropdownHeight > window.innerHeight)
      ? rect.top - dropdownHeight
      : rect.bottom;

    // Align to the right of the button
    const left = rect.right - dropdownWidth;

    setDropdownPosition({ top: top + window.scrollY, left: left + window.scrollX });
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const navigateTo = (collection, action) => {
    router.push(`/admin/${collection}/${action}`);
    setOpenDropdown(null);
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-md flex flex-col gap-6 relative">
        {options.map((opt) => (
          <div key={opt.id} className="relative">
            {/* Header */}
            <div
              className="flex justify-between items-center p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-t-4 border-[var(--color-primary)] cursor-pointer select-none"
              onClick={(e) => toggleDropdown(opt.id, e)}
            >
              <span className="text-lg sm:text-xl font-semibold text-gray-800">{opt.label}</span>
              <FiChevronDown
                className={`text-gray-800 transition-transform duration-200 ${openDropdown === opt.id ? 'rotate-180' : 'rotate-0'}`}
                size={20}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Portal for dropdown */}
      {openDropdown && createPortal(
        <div
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
          className="absolute w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col"
        >
          <button
            onClick={() => navigateTo(options.find(o => o.id === openDropdown).key, 'create')}
            className="px-4 py-2 hover:bg-green-500 hover:text-white text-left text-black"
          >
            Create
          </button>
          <button
            onClick={() => navigateTo(options.find(o => o.id === openDropdown).key, 'update')}
            className="px-4 py-2 hover:bg-yellow-500 hover:text-white text-left text-black"
          >
            Update
          </button>
          <button
            onClick={() => navigateTo(options.find(o => o.id === openDropdown).key, 'delete')}
            className="px-4 py-2 hover:bg-red-500 hover:text-white text-left text-black"
          >
            Delete
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}
