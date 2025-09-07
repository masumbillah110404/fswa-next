'use client';

import { useState, useContext } from 'react';
import { db, doc, deleteDoc } from '../../../../../firebase';
import { DataProviderContext } from '../../../Provider/Provider';
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteMember() {
  const { members, setMembers } = useContext(DataProviderContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Filter members by search term
  const filteredMembers = executiveMembers.filter(m =>
  (m.name?.toLowerCase() || '').includes(searchTerm.toLowerCase())
);


  const handleSelect = (member) => setSelectedMember(member);

  const handleDelete = async () => {
    if (!selectedMember) return;
    if (!confirm(`Are you sure you want to delete ${selectedMember.name}?`)) return;

    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'members', selectedMember.id));
      
      // Update context
      setMembers(prev => prev.filter(m => m.id !== selectedMember.id));

      setSelectedMember(null);
      setSearchTerm('');
      alert('Member deleted successfully!');
    } catch (err) {
      alert(err.message || err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Delete Member</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search member by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Member List */}
      {filteredMembers.length > 0 && !selectedMember && (
        <ul className="border rounded max-h-48 overflow-y-auto mb-4">
          {filteredMembers.map(member => (
            <li
              key={member.id}
              onClick={() => handleSelect(member)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            >
              <span>{member.name}</span>
              <span className="text-sm text-gray-500">{member.dept}</span>
            </li>
          ))}
        </ul>
      )}

      {selectedMember && (
        <div className="flex flex-col gap-3">
          <div className="border p-2 rounded bg-gray-50">
            <p><strong>Name:</strong> {selectedMember.name}</p>
            <p><strong>Dept:</strong> {selectedMember.dept}</p>
            <p><strong>Phone:</strong> {selectedMember.phone}</p>
            <p><strong>Session:</strong> {selectedMember.session}</p>
            <p><strong>Upazilla:</strong> {selectedMember.upazilla}</p>
          </div>

          <button
            onClick={handleDelete}
            className={`flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition ${deleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={deleting}
          >
            <FiTrash2 /> {deleting ? 'Deleting...' : 'Delete Member'}
          </button>

          <button
            onClick={() => setSelectedMember(null)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
