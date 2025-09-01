import { NextResponse } from "next/server";
import { db } from "../../../../firebase";  
import { collection, addDoc, query, getDocs } from "firebase/firestore";


export const events = [
  {
    title: "Annual Reunion 2025",
    description: "Join us for our annual reunion with alumni and current students.",
    time: "September 15, 2025, 4:00 PM",
    image: "/events.jpg",
    details: `
      The Annual Reunion 2025 brings together alumni and current students for a day of celebration, networking, and fun. 
      Enjoy cultural programs, guest speeches, and a gala dinner. Don't miss this opportunity to reconnect and make new memories!
    `
  },
  {
    title: "Career Guidance Seminar",
    description: "Get expert advice from industry professionals and alumni.",
    time: "October 10, 2025, 2:00 PM",
    image: "/events.jpg",
    details: `
      This seminar features talks from successful alumni and industry leaders. 
      Learn about career paths, resume building, and interview tips. Q&A session included. Open to all FSWA members.
    `
  },
  {
    title: "FSWA News: Scholarship Announced",
    description: "New scholarships available for Feni students. Apply now!",
    time: "August 28, 2025",
    image: "/events.jpg",
    details: `
      FSWA is proud to announce new scholarships for deserving students from Feni. 
      Applications are open until September 30. Visit our website for eligibility criteria and application process.
    `
  }
];

export async function GET() {
  try {
    const eventsRef = collection(db, "events");

    // Optional: prevent duplicates by checking if collection is empty
    const existing = await getDocs(eventsRef);
    if (!existing.empty) {
      return NextResponse.json({ message: "Events already uploaded" });
    }

    for (let event of events) {
      await addDoc(eventsRef, event);
      console.log("Added:", event.title);
    }

    return NextResponse.json({ message: "Events uploaded successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
