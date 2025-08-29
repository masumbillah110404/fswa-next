import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Feni Students Welfare Association",
  description: "Connecting Feni students at JnU",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-white text-white font-['Public_Sans','Noto_Sans',sans-serif]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
