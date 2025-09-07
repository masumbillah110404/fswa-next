'use client';

import { useState, useContext } from "react";
import { db, doc, deleteDoc } from "../../../../../firebase";
import { DataProviderContext } from "../../../Provider/Provider";
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteAdvisor() {
  const { advisorsList, setAdvisorsList } = useContext(DataProviderContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const filteredAdvisors = advisorsList.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (a.session && a.session.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (a.upazilla && a.upazilla.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSelect = (advisor) => setSelectedAdvisor(advisor);

  const handleDelete = async () => {
    if (!selectedAdvisor) return;
    if (!confirm(`Are you sure you want to delete ${selectedAdvisor.name}?`)) return;

    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'advisors', selectedAdvisor.id));
      setAdvisorsList(prev => prev.filter(a => a.id !== selectedAdvisor.id));
      alert('Advisor deleted successfully!');
      setSelectedAdvisor(null);
      setSearchTerm('');
    } catch (err) {
      alert(err.message || err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Delete Advisor</h1>

      {!selectedAdvisor && (
        <input
          type="text"
          placeholder="Search advisor by name, dept, session or upazilla..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
      )}

      {!selectedAdvisor && filteredAdvisors.length > 0 && (
        <ul className="border rounded max-h-48 overflow-y-auto mb-4">
          {filteredAdvisors.map(a => (
            <li
              key={a.id}
              onClick={() => handleSelect(a)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            >
              <span>{a.name}</span>
              <span className="text-sm text-gray-500">{a.dept}</span>
            </li>
          ))}
        </ul>
      )}

      {selectedAdvisor && (
        <div className="flex flex-col gap-3">
          <div className="border p-2 rounded bg-gray-50">
            <p><strong>Name:</strong> {selectedAdvisor.name}</p>
            <p><strong>Dept:</strong> {selectedAdvisor.dept}</p>
            <p><strong>Session:</strong> {selectedAdvisor.session}</p>
            <p><strong>Upazilla:</strong> {selectedAdvisor.upazilla}</p>
          </div>

          <button
            onClick={handleDelete}
            className={`flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition ${deleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={deleting}
          >
            <FiTrash2 /> {deleting ? 'Deleting...' : 'Delete Advisor'}
          </button>

          <button
            onClick={() => setSelectedAdvisor(null)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
