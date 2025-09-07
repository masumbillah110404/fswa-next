"use client";

import { useContext, useState } from "react";
import { DataProviderContext } from "../../../Provider/Provider";
import { db, doc, updateDoc } from "../../../../../firebase";

export default function UpdateEvent() {
  const { events, setEvents } = useContext(DataProviderContext);

  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const handleSelect = (event) => {
    setSelectedEvent(event);
    const date = new Date(event.time);

    setForm({
      ...event,
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
      hour: date.getHours() % 12 || 12,
      minute: date.getMinutes().toString().padStart(2, "0"),
      period: date.getHours() >= 12 ? "PM" : "AM",
      imageFile: null
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    setLoading(true);

    const formattedTime = `${form.month} ${form.day}, ${form.year}, ${form.hour}:${form.minute} ${form.period}`;

    try {
      const docRef = doc(db, "events", selectedEvent.id);
      await updateDoc(docRef, {
        title: form.title,
        description: form.description,
        details: form.details,
        time: formattedTime,
        image: form.imageFile ? form.imageFile : form.image
      });

      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === selectedEvent.id
            ? { ...ev, ...form, time: formattedTime, image: form.imageFile || ev.image }
            : ev
        )
      );

      alert("Event updated successfully!");
      handleCancel();
    } catch (error) {
      console.error(error);
      alert("Failed to update event.");
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setSelectedEvent(null);
    setForm({});
  };

  const filteredEvents = events.filter(ev =>
  (ev.title?.toLowerCase() || '').includes(search.toLowerCase())
);


  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Update Event</h1>

      {/* Search */}
      {!selectedEvent && (
        <input
          type="text"
          placeholder="Search event by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
      )}

      {/* Event List */}
      {!selectedEvent &&
        filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="flex justify-between items-center border p-3 rounded mb-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelect(ev)}
          >
            <div>

            <p>{ev.title}</p>
            <p className="text-sm text-gray-500">{ev.time}</p>
            </div>
          </div>
        ))}

      {/* Update Form */}
      {selectedEvent && (
        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="font-medium">Title</span>
            <input
              type="text"
              name="title"
              value={form.title || ""}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium">Description</span>
            <input
              type="text"
              name="description"
              value={form.description || ""}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium">Details</span>
            <textarea
              name="details"
              value={form.details || ""}
              onChange={handleChange}
              className="border p-2 rounded"
              rows={4}
              required
            />
          </label>

          {/* Time Fields */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <select name="month" value={form.month || ""} onChange={handleChange} className="border p-2 rounded">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
            <input type="number" name="day" value={form.day || ""} onChange={handleChange} min="1" max="31" className="border p-2 rounded" />
            <input type="number" name="year" value={form.year || ""} onChange={handleChange} min="2000" max="2100" className="border p-2 rounded" />
            <input type="number" name="hour" value={form.hour || ""} onChange={handleChange} min="1" max="12" className="border p-2 rounded" />
            <input type="number" name="minute" value={form.minute || ""} onChange={handleChange} min="0" max="59" className="border p-2 rounded" />
            <select name="period" value={form.period || ""} onChange={handleChange} className="border p-2 rounded">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>

          {/* Image Upload */}
          <label className="flex flex-col">
            <span className="font-medium">Image</span>
            <input
              type="file"
              name="imageFile"
              onChange={handleChange}
              className="border p-2 rounded cursor-pointer"
            />
          </label>

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition flex-1"
            >
              {loading ? "Updating..." : "Update Event"}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition flex-1"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
