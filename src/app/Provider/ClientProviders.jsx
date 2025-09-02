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
      setInitialData({ events, ...membersData, counts, messages });
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
