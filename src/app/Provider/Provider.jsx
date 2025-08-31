// src/app/Provider/MyDataProvider.jsx
"use client";
import { createContext, useState } from "react";

export const DataProviderContext = createContext({});

export default function MyDataProvider({ initialData = {}, children }) {
  const counts = initialData.counts || {};

  const [students, setStudents] = useState(counts.students || 0);
  const [alumni, setAlumni] = useState(counts.alumni || 0);
  const [advisors, setAdvisors] = useState(counts.advisors || 0);
  const [members, setMembers] = useState(initialData.members || []);
  const [executiveMembers, setExecutiveMembers] = useState(initialData.executiveMembers || []);
  const [advisorsList, setAdvisorsList] = useState(initialData.advisors || []);
  const [events, setEvents] = useState(initialData.events || []);
  const [highlightColor, setHighlightColor] = useState("[#7317cf]");

  return (
    <DataProviderContext.Provider
      value={{
        students, setStudents,
        alumni, setAlumni,
        advisors, setAdvisors,
        members, setMembers,
        executiveMembers, setExecutiveMembers,
        advisorsList, setAdvisorsList,
        events, setEvents,
        highlightColor, setHighlightColor,
      }}
    >
      {children}
    </DataProviderContext.Provider>
  );
}
