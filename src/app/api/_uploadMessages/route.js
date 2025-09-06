import { NextResponse } from "next/server";
import { db } from "../../../../firebase";  
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

const heroes = [
  {
    id: 1,
    image: "/president.webp",
    alt: "President",
    title: "President’s Message",
    message:
      "Welcome to our association! We are committed to guiding our students and strengthening unity across the community.",
    docId: "president",
  },
  {
    id: 2,
    image: "/gs.jpg",
    alt: "General Secretary",
    title: "General Secretary’s Message",
    message:
      "Together we work to foster growth, cooperation, and success among all members of our welfare family.",
    docId: "generalSecretary",
  },
];

export async function GET() {
  try {
    const homepageRef = collection(db, "homepageMessages");

    for (const hero of heroes) {
      await setDoc(doc(homepageRef, hero.docId), {
        id: hero.id,
        image: hero.image,
        alt: hero.alt,
        title: hero.title,
        message: hero.message,
      });
      console.log("Added:", hero.title);
    }

    return NextResponse.json({ message: "Messages uploaded successfully" });
  } catch (error) {
    console.error("❌ Error uploading messages:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
