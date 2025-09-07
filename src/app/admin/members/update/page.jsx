'use client';

import { useState, useContext } from 'react';
import { db, doc, updateDoc } from '../../../../../firebase';
import { FiChevronDown } from 'react-icons/fi';
import { DataProviderContext } from '../../../Provider/Provider';

export default function UpdateMember() {
  const { members, setMembers } = useContext(DataProviderContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [form, setForm] = useState({
    name: '',
    dept: '',
    phone: '',
    session: '',
    upazilla: '',
    image: null
  });
  const [uploading, setUploading] = useState(false);
  const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  // Select member from filtered list
  const handleSelect = (member) => {
    setSelectedMember(member);
    setForm({
      name: member.name || '',
      dept: member.dept || '',
      phone: member.phone || '',
      session: member.session || '',
      upazilla: member.upazilla || '',
      image: null
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files[0]) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedMember) {
      alert('Please select a member to update');
      return;
    }

    setUploading(true);
    try {
      let imageUrl = selectedMember.image;

      // Upload new image if selected
      if (form.image) {
        const reader = new FileReader();
        reader.readAsDataURL(form.image);
        await new Promise((resolve, reject) => {
          reader.onloadend = async () => {
            const base64Image = reader.result.split(',')[1];
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
              method: 'POST',
              body: new URLSearchParams({ image: base64Image })
            });
            const data = await res.json();
            if (!data.success) reject('Image upload failed');
            imageUrl = data.data.url;
            resolve();
          };
        });
      }

      // Update Firestore
      const docRef = doc(db, 'members', selectedMember.id);
      await updateDoc(docRef, {
        ...form,
        image: imageUrl
      });

      // Update context
      setMembers(prev =>
        prev.map(m => m.id === selectedMember.id ? { ...m, ...form, image: imageUrl } : m)
      );

      alert('Member updated successfully!');
      setSelectedMember(null);
      setForm({ name:'', dept:'', phone:'', session:'', upazilla:'', image: null });
      setSearchTerm('');
    } catch (err) {
      alert(err.message || err);
    } finally {
      setUploading(false);
    }
  };

  // Filter members by name
  const filteredMembers = members.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Update Member</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search member by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Filtered Member List */}
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
        <form className="flex flex-col gap-3" onSubmit={handleUpdate}>
          {['name','dept','phone','session','upazilla'].map(field => (
            <label key={field} className="flex flex-col">
              <span className="text-sm font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </label>
          ))}

          {/* File Input */}
          <label className="flex items-center justify-between border p-2 rounded cursor-pointer hover:bg-gray-100">
            {form.image ? form.image.name : 'Select New Image (optional)'}
            <FiChevronDown size={20} className="text-gray-700" />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>

          <button
            type="submit"
            className={`px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={uploading}
          >
            {uploading ? 'Updating...' : 'Update Member'}
          </button>

          <button
            type="button"
            onClick={() => setSelectedMember(null)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
