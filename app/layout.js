import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import LeftNav from "./Components/LeftNav/LeftNav";
import Categories from "./Components/Categories/Categories";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Dua and Ruqyah collection",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-slate-200" lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.svg" />
      </Head>

      <body className={`${inter.className}`}>
        <div>
          <div className="">
            <Navbar></Navbar>
          </div>
          <div className="flex gap-5">

            <div>
              <LeftNav></LeftNav>
            </div>
            <div>
              <Categories></Categories>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
