import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahreen-Jokes-Generator",
  description: "App to see jokes and generate jokes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
