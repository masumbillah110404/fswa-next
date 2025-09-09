'use client';

import { useState } from 'react';
import { db, collection, addDoc } from '../../../../../firebase';
import { FiChevronDown } from 'react-icons/fi';

export default function CreateMember() {
  const [form, setForm] = useState({
    name: '',
    dept: '',
    phone: '',
    sessionStart: '',
    upazilla: '',
    bloodGroup: '',
    image: null,
  });
  const [uploading, setUploading] = useState(false);

  const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files[0]) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.image) {
      alert('Please select an image');
      return;
    }

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(form.image);
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1];

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          {
            method: 'POST',
            body: new URLSearchParams({ image: base64Image }),
          }
        );

        const data = await res.json();
        if (!data.success) throw new Error('Image upload failed');

        const startYear = parseInt(form.sessionStart, 10);
        const endYear = isNaN(startYear) ? '' : startYear + 1;

        const docData = {
          name: form.name,
          dept: form.dept,
          phone: form.phone,
          upazilla: form.upazilla,
          bloodGroup: form.bloodGroup || 'N/A',
          session: `${form.sessionStart}-${endYear}`,
          image: data.data.url,
        };

        await addDoc(collection(db, 'members'), docData);

        setForm({
          name: '',
          dept: '',
          phone: '',
          sessionStart: '',
          upazilla: '',
          bloodGroup: '',
          image: null,
        });
        setUploading(false);
        alert('Member created successfully!');
      };
    } catch (err) {
      setUploading(false);
      alert(err.message);
    }
  };

  const endYear =
    form.sessionStart && !isNaN(parseInt(form.sessionStart, 10))
      ? parseInt(form.sessionStart, 10) + 1
      : '';

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Create Member</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {['name', 'dept', 'phone', 'upazilla'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        ))}

        {/* Blood Group */}
        <select
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* Session Start & End */}
        <div className="flex gap-2">
          <input
            type="number"
            name="sessionStart"
            placeholder="Session Start"
            value={form.sessionStart}
            onChange={handleChange}
            className="border p-2 rounded w-1/2"
            required
          />
          <input
            type="number"
            name="sessionEnd"
            placeholder="Session End"
            value={endYear}
            readOnly
            className="border p-2 rounded w-1/2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Styled File Input */}
        <label className="flex items-center justify-between border p-2 rounded cursor-pointer hover:bg-gray-100">
          {form.image ? form.image.name : 'Select Image'}
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
          className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${
            uploading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Create'}
        </button>
      </form>
    </div>
  );
}
