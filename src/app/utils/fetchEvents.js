// app/utils/fetchEvents.js
import { db } from "../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function fetchEvents() {
  try {
    const eventsRef = collection(db, "events");
    const q = query(eventsRef, orderBy("time", "desc")); 
    const snapshot = await getDocs(q);
    
    const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    events.sort((a, b) => new Date(b.time) - new Date(a.time));
    return events;
  } catch (err) {
    console.error("Error fetching events:", err);
    return [];
  }
}
