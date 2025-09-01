import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { collection, addDoc } from "firebase/firestore";

const members = [
  { id: 1, name: "Sadia Rahman", dept: "English", image: "/president.webp" },
  { id: 2, name: "Tanvir Ahmed", dept: "Physics", image: "/president.webp" },
  { id: 3, name: "Rifat Hossain", dept: "Law", image: "/president.webp" }
];

const executiveMembers = [
  { id: 1, name: "Farhan Islam", dept: "Management", image: "/president.webp" },
  { id: 2, name: "Nusrat Jahan", dept: "Marketing", image: "/president.webp" }
];

const advisors = [
  { id: 1, name: "Dr. Mahmudul Hasan", dept: "Chemistry", image: "/president.webp" },
  { id: 2, name: "Prof. Shamsul Alam", dept: "History", image: "/president.webp" }
];

export async function GET() {
  try {
    const collections = [
      { name: "members", data: members },
      { name: "executiveMembers", data: executiveMembers },
      { name: "advisors", data: advisors }
    ];

    for (let col of collections) {
      const colRef = collection(db, col.name);
      for (let item of col.data) {
        await addDoc(colRef, item);
        console.log(`Added to ${col.name}:`, item.name);
      }
    }

    return NextResponse.json({ message: "All member collections uploaded" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
