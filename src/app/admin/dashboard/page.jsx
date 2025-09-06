import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("adminSession")?.value;

  if (!token) redirect("/admin"); 

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    redirect("/admin"); 
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, you are logged in!</p>
    </div>
  );
}
