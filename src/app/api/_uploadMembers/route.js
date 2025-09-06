// src/app/api/uploadMembers/route.js
import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { collection, addDoc } from "firebase/firestore";

// Upazilas of Feni District
const upazilas = [
  "Feni Sadar",
  "Chhagalnaiya",
  "Parshuram",
  "Daganbhuiyan",
  "Fulgazi",
  "Sonagazi",
];

// Generate 100 dummy members
const members = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  dept: [
    "English",
    "Physics",
    "Law",
    "Chemistry",
    "History",
    "Management",
    "Marketing",
  ][i % 7],
  session: `20${15 + (i % 10)}-${20 + (i % 10)}`, // e.g. 2015-20
  upazilla: upazilas[i % upazilas.length], // Rotate through Feni upazilas
  phone: `0171${(100000 + i).toString().slice(0, 6)}`, // dummy unique phone
  image: "/default-avatar.jpg",
}));

export async function GET() {
  try {
    const colRef = collection(db, "members");

    for (let member of members) {
      await addDoc(colRef, member);
      console.log(`Added member: ${member.name}`);
    }

    return NextResponse.json({ message: "100 members uploaded successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
