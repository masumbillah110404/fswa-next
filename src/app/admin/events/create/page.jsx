'use client';

import { useState, useContext } from "react";
import { DataProviderContext } from "../../../Provider/Provider";
import { db, collection, addDoc } from "../../../../../firebase";

export default function CreateEvent() {
  const { events, setEvents } = useContext(DataProviderContext);
  const [form, setForm] = useState({
    title: "",
    description: "",
    details: "",
    image: null,
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "PM",
  });
  const [uploading, setUploading] = useState(false);
  const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      if (!form.image) throw new Error("Please select an image");

      // Upload image
      const reader = new FileReader();
      reader.readAsDataURL(form.image);
      reader.onloadend = async () => {
        const base64Image = reader.result.split(",")[1];
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          {
            method: "POST",
            body: new URLSearchParams({ image: base64Image }),
          }
        );
        const data = await res.json();
        if (!data.success) throw new Error("Image upload failed");

        // Format time into single string
        const months = [
          "January","February","March","April","May","June",
          "July","August","September","October","November","December"
        ];
        const monthName = months[parseInt(form.month) - 1];
        const formattedTime = `${monthName} ${form.day}, ${form.year}, ${form.hour}:${form.minute} ${form.ampm}`;

        // Final document
        const docData = {
          title: form.title,
          description: form.description,
          details: form.details,
          image: data.data.url,
          time: formattedTime, // <-- single field
        };

        const docRef = await addDoc(collection(db, "events"), docData);
        setEvents((prev) => [...prev, { id: docRef.id, ...docData }]);

        // Reset form
        setForm({
          title: "",
          description: "",
          details: "",
          image: null,
          day: "",
          month: "",
          year: "",
          hour: "",
          minute: "",
          ampm: "PM",
        });
        setUploading(false);
        alert("Event created successfully!");
      };
    } catch (err) {
      setUploading(false);
      alert(err.message || err);
    }
  };

  // Dropdown options
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = ["00", "15", "30", "45"];

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Description */}
        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Event Details"
          value={form.details}
          onChange={handleChange}
          className="border p-2 rounded h-24"
          required
        />

        {/* Date */}
        <div className="grid grid-cols-3 gap-2">
          <select name="day" value={form.day} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Day</option>
            {days.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>

          <select name="month" value={form.month} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Month</option>
            {months.map((m, idx) => <option key={m} value={idx + 1}>{m}</option>)}
          </select>

          <select name="year" value={form.year} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Year</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        {/* Time */}
        <div className="grid grid-cols-3 gap-2">
          <select name="hour" value={form.hour} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Hour</option>
            {hours.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>

          <select name="minute" value={form.minute} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Minute</option>
            {minutes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>

          <select name="ampm" value={form.ampm} onChange={handleChange} className="border p-2 rounded" required>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        {/* Image */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Image
        </label>
        <label className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded cursor-pointer border border-gray-300 hover:bg-gray-200">
            <span>{form.image ? form.image.name : "Choose file"}</span>
            <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            required
            />
        </label>
        </div>

        <button
          type="submit"
          className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Create"}
        </button>
      </form>
    </div>
  );
}
