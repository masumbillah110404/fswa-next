import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export async function fetchCounts() {
  const docRefs = ["students", "alumni", "advisors"].map(id => doc(db, "count", id));
  const results = {};
  
  for (let ref of docRefs) {
    const snap = await getDoc(ref);
    if (snap.exists()) results[ref.id] = snap.data().count;
  }
  
  return results;
}
