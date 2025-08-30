"use client";
import { createContext, useState } from 'react';

export const DataProviderContext = createContext({});

export function DataProvider({ children }) {
  const [students, setStudents] = useState(120);
  const [alumni, setAlumni] = useState(250);
  const [advisors, setAdvisors] = useState(30);
  const [highlightColor, setHighlightColor] = useState("[#7317cf]");

  return (
    <DataProviderContext.Provider value={{ students, setStudents, alumni, setAlumni, advisors, setAdvisors, highlightColor, setHighlightColor }}>
      {children}
    </DataProviderContext.Provider>
  );
}