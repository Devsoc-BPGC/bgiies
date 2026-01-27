// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BGIIES",
  icons: {
    icon: "/bgiies_logo.png",
  },
  description: "Official Website of BGIIES Bits Pilani Goa Campus",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
          <Navbar/>
          {children}
          <Footer />
      </body>
    </html>
  );
}