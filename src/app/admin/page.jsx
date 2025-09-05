import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default function AdminPage() {
  const token = cookies().get("adminSession")?.value;

  if (token) {
    try {
      const jwt = require("jsonwebtoken");
      jwt.verify(token, process.env.JWT_SECRET);
      redirect("/admin/dashboard");
    } catch (err) {
      console.log("Invalid token, show login form");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 text-black">
      <LoginForm />
    </div>
  );
}
