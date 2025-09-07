"use client";

import { useContext, useState } from "react";
import { DataProviderContext } from "../../../Provider/Provider";
import { db, doc, deleteDoc } from "../../../../../firebase";

export default function DeleteEvent() {
  const { events, setEvents } = useContext(DataProviderContext);

  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleDelete = async () => {
    if (!selectedEvent) return;

    if (!confirm(`Are you sure you want to delete "${selectedEvent.title}"?`)) return;

    setLoading(true);
    try {
      await deleteDoc(doc(db, "events", selectedEvent.id));

      setEvents((prev) => prev.filter((ev) => ev.id !== selectedEvent.id));

      alert("Event deleted successfully!");
      setSelectedEvent(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete event.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter((ev) =>
    ev.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Delete Event</h1>

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
            <span>{ev.title}</span>
            <span className="text-sm text-gray-500">{ev.time}</span>
          </div>
        ))}

      {/* Selected Event Delete */}
      {selectedEvent && (
        <div className="border rounded p-4 bg-white shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{selectedEvent.title}</h2>
          <p className="text-gray-700">{selectedEvent.description}</p>
          <p className="text-gray-500 text-sm">{selectedEvent.time}</p>

          <div className="flex gap-2 mt-2">
            <button
              onClick={handleDelete}
              disabled={loading}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition flex-1"
            >
              {loading ? "Deleting..." : "Delete Event"}
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
