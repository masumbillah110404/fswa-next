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
      <body className="text-white">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
