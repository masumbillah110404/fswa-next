"use client";

import { useState, useEffect } from "react";
import MyDataProvider from "./Provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { fetchEvents } from "../utils/fetchEvents";
import { fetchMembers } from "../utils/fetchMembers";
import { fetchCounts } from "../utils/fetchCount";
import { fetchMessages } from "../utils/fetchMessages"; 

export default function ClientProviders({ children }) {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function getData() {
      const [events, membersData, counts, messages] = await Promise.all([
        fetchEvents(),
        fetchMembers(),
        fetchCounts(),
        fetchMessages(),
      ]);

      // Normalize all members/executive/advisors to ensure consistent structure
      const normalize = (list) =>
        list.map((m) => ({
          id: m.id, // Firestore doc id
          name: m.name || '',
          dept: m.dept || '',
          phone: m.phone || '',
          session: m.session || '',
          upazilla: m.upazilla || '',
          image: m.image || ''
        }));

      setInitialData({ 
        events, 
        members: normalize(membersData.members),
        executiveMembers: normalize(membersData.executiveMembers),
        advisors: normalize(membersData.advisors),
        counts, 
        messages 
      });
    }
    getData();
  }, []);

  if (!initialData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <MyDataProvider initialData={initialData}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </MyDataProvider>
  );
}
