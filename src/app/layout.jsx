// src/app/layout.jsx
import "./globals.css";
import ClientProviders from "./Provider/ClientProviders";

export const metadata = {
  title: "Feni Students Welfare Association",
  description: "Connecting Feni students at JnU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-white font-['Public_Sans','Noto_Sans',sans-serif]">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
