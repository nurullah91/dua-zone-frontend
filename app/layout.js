import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import LeftNav from "./Components/LeftNav/LeftNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Dua and Ruqyah collection",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-slate-200" lang="en">
      <body className={`${inter.className}`}>
      <LeftNav></LeftNav>
      {/* <Navbar></Navbar> */}
      {children}
      </body>
    </html>
  );
}
