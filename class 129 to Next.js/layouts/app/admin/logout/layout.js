import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Facebook - Connect with friend and the world aound you.",
  description: "Admin Page: Facebook is a social utility that connects with friends and others who work, study and live around them. Poeple use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the poeple they meet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
           {children}
           <Footer />
        </body>
    </html>
  );
}