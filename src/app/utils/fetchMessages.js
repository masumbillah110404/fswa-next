// utils/fetchMessages.js
import { db } from "../../../firebase"; 
import { collection, getDocs } from "firebase/firestore";

export async function fetchMessages() {
  const snapshot = await getDocs(collection(db, "homepageMessages"));
  return snapshot.docs.map(doc => doc.data());
}
