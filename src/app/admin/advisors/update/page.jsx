'use client';

import { useState, useContext } from "react";
import { DataProviderContext } from "../../../Provider/Provider";
import { db, doc, updateDoc } from "../../../../../firebase";
import { FiChevronDown } from "react-icons/fi";

export default function UpdateAdvisor() {
  const { advisorsList, setAdvisorsList } = useContext(DataProviderContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
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

  const handleSelect = (advisor) => {
    setSelectedAdvisor(advisor);
    setForm({
      name: advisor.name || '',
      dept: advisor.dept || '',
      phone: advisor.phone || '',
      session: advisor.session || '',
      upazilla: advisor.upazilla || '',
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
    if (!selectedAdvisor) return alert('Select an advisor first');

    setUploading(true);

    try {
      let imageUrl = selectedAdvisor.image;

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

      const docRef = doc(db, 'advisors', selectedAdvisor.id);
      await updateDoc(docRef, {
        name: form.name,
        dept: form.dept,
        phone: form.phone,
        session: form.session,
        upazilla: form.upazilla,
        image: imageUrl
      });

      setAdvisorsList(prev =>
        prev.map(a => a.id === selectedAdvisor.id ? { ...a, ...form, image: imageUrl } : a)
      );

      alert('Advisor updated successfully!');
      handleCancel();
    } catch (err) {
      alert(err.message || err);
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setSelectedAdvisor(null);
    setForm({ name:'', dept:'', phone:'', session:'', upazilla:'', image: null });
    setSearchTerm('');
  };

  const filteredAdvisors = advisorsList.filter(a =>
  (a.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) 
);


  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Update Advisor</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search advisor by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Advisor List */}
      {filteredAdvisors.length > 0 && !selectedAdvisor && (
        <ul className="border rounded max-h-48 overflow-y-auto mb-4">
          {filteredAdvisors.map(a => (
            <li
              key={a.id}
              onClick={() => handleSelect(a)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <strong>{a.name}</strong> — {a.dept}, {a.session}, {a.upazilla}
            </li>
          ))}
        </ul>
      )}

      {/* Update Form */}
      {selectedAdvisor && (
        <form className="flex flex-col gap-3" onSubmit={handleUpdate}>
          {['name','dept','phone','session','upazilla'].map(field => (
            <div key={field} className="flex flex-col">
              <label className="text-sm font-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </div>
          ))}

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

          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <button
              type="submit"
              className={`px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 flex-1 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={uploading}
            >
              {uploading ? 'Updating...' : 'Update'}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 flex-1"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
