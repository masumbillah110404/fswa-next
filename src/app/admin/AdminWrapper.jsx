'use client';

import { useRouter } from 'next/navigation';
import { FiHome } from 'react-icons/fi';

export default function AdminWrapper({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin-logout', { method: 'POST' });
    router.push('/admin-login');
  };

  const goHome = () => {
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl border-t-4 border-[var(--color-primary)] overflow-hidden">
        <div className="flex justify-between items-center p-6 bg-[var(--color-primary)] text-white">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <div className="flex gap-4">
            <button
              onClick={goHome}
              className="flex items-center justify-center px-4 py-2 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              <FiHome size={20} />
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="sm:p-6">{children}</div>
      </div>
    </div>
  );
}
