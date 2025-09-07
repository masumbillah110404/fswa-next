import { db } from "../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function fetchMembers() {
  const membersSnap = await getDocs(query(collection(db, "members"), orderBy("name")));
  const execSnap = await getDocs(query(collection(db, "executiveMembers"), orderBy("name")));
  const advisorsSnap = await getDocs(query(collection(db, "advisors"), orderBy("name")));

  const normalize = (doc) => {
    const data = doc.data();
    return {
      id: doc.id, 
      name: data.name || '',
      dept: data.dept || '',
      phone: data.phone || '',
      session: data.session || '',
      upazilla: data.upazilla || '',
      image: data.image || ''
    };
  };

  return {
    members: membersSnap.docs.map(normalize),
    executiveMembers: execSnap.docs.map(normalize),
    advisors: advisorsSnap.docs.map(normalize)
  };
}
