import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton"; 

export default async function AdminPage() {
  const receivedCookies = await cookies();
  const token = receivedCookies.get("adminSession")?.value;


  if (!token) redirect("/admin/login");

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    redirect("/admin/login");
  }

  const menuItems = [
    { title: "Update Homepage Messages", href: "/admin/homepageMessages" },
    { title: "Update Counts", href: "/admin/counts" },
    { title: "Update Events & News", href: "/admin/eventsAndNews" },
    { title: "Update Members", href: "/admin/members" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="p-6 bg-gray-800 text-white rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <LogoutButton />
      </div>
    </div>
  );
}
