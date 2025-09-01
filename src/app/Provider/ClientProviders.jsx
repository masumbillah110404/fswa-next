// src/app/Provider/ClientProviders.jsx
"use client";

import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import MyDataProvider from "./Provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { fetchEvents } from "../utils/fetchEvents";
import { fetchMembers } from "../utils/fetchMembers";
import { fetchCounts } from "../utils/fetchCount";

export default function ClientProviders({ children }) {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function getData() {
      const [events, membersData, counts] = await Promise.all([
        fetchEvents(),
        fetchMembers(),
        fetchCounts(),
      ]);
      setInitialData({ events, ...membersData, counts });
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
    <SessionProvider>
      <MyDataProvider initialData={initialData}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </MyDataProvider>
    </SessionProvider>
  );
}
