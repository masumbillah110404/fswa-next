import { NextResponse } from "next/server";
import { db } from "../../../../firebase";  
import { collection, addDoc, query, getDocs, doc, setDoc } from "firebase/firestore";


export async function GET() {
  try {
    const counts = [
      { id: "students", count: 120 },
      { id: "alumni", count: 250 },
      { id: "advisors", count: 30 }
    ];

    const colRef = collection(db, "count");

    for (let item of counts) {
      // setDoc will create or overwrite the document with the given id
      await setDoc(doc(colRef, item.id), { count: item.count });
      console.log(`Set count for ${item.id}: ${item.count}`);
    }

    return NextResponse.json({ message: "Counts uploaded successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
