'use client';

import { useState, useContext } from "react";
import { db, collection, addDoc } from "../../../../../firebase";
import { DataProviderContext } from '../../../Provider/Provider';

export default function CreateAdvisor() {
  const { advisorsList, setAdvisorsList } = useContext(DataProviderContext);

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

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: new URLSearchParams({ image: base64Image })
        });

        const data = await res.json();
        if (!data.success) throw new Error('Image upload failed');

        const docData = { ...form, image: data.data.url };
        await addDoc(collection(db, 'advisors'), docData);

        setAdvisorsList(prev => [...prev, docData]);
        setForm({ name:'', dept:'', phone:'', session:'', upazilla:'', image: null });
        setUploading(false);
        alert('Advisor created successfully!');
      };
    } catch (err) {
      setUploading(false);
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Create Advisor</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {['name','dept','phone','session','upazilla'].map(field => (
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

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Create'}
        </button>
      </form>
    </div>
  );
}
