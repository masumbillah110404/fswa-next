import { db } from "../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function fetchMembers() {
  const membersSnap = await getDocs(query(collection(db, "members"), orderBy("id")));
  const execSnap = await getDocs(query(collection(db, "executiveMembers"), orderBy("id")));
  const advisorsSnap = await getDocs(query(collection(db, "advisors"), orderBy("id")));

  return {
    members: membersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })),
    executiveMembers: execSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })),
    advisors: advisorsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  };
}
