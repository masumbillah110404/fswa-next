'use client';

import { useState, useContext } from "react";
import { DataProviderContext } from "../../../Provider/Provider";
import { db, collection, addDoc } from "../../../../../firebase";
import { FiChevronDown } from "react-icons/fi";

export default function CreateExecutiveMember() {
  const { executiveMembers, setExecutiveMembers } = useContext(DataProviderContext);
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
    setUploading(true);

    try {
      if (!form.image) throw new Error('Please select an image');

      const reader = new FileReader();
      reader.readAsDataURL(form.image);
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1];
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: new URLSearchParams({ image: base64Image })
        });
        const data = await res.json();
        if (!data.success) throw new Error('Image upload failed');

        const docData = { ...form, image: data.data.url };
        const docRef = await addDoc(collection(db, "executiveMembers"), docData);

        setExecutiveMembers(prev => [...prev, { id: docRef.id, ...docData }]);
        setForm({ name:'', dept:'', phone:'', session:'', upazilla:'', image: null });
        setUploading(false);
        alert('Executive member created successfully!');
      };
    } catch (err) {
      setUploading(false);
      alert(err.message || err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Create Executive Member</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
          type="submit"
          className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Create'}
        </button>
      </form>
    </div>
  );
}
