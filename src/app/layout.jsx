import "./globals.css";
import Navbar from "./components/Navbar";
import { DataProvider } from "./Provider/Provider";
import Footer from "./components/Footer";

export const metadata = {
  title: "Feni Students Welfare Association",
  description: "Connecting Feni students at JnU",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <DataProvider>
        <body className="bg-white text-white font-['Public_Sans','Noto_Sans',sans-serif]">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </DataProvider>
    </html>
  );
}
